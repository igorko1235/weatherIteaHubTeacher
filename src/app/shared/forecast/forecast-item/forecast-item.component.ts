import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {WeatherListItem} from '../../../models/weatherListItem';
import {fadeInOut, flyInOut, scaleUp} from '../../../animations';
import {TEM_PIPES_TYPE} from "../../pipes/temperature.pipe";
import { asEnumerable } from 'linq-es2015';
import * as moment from 'moment/moment';
import {SelectItem,Message} from 'primeng/primeng';


const MY_STATES = {
  start: 'small',
  end: 'end'
};

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.css'],
  animations: [
    fadeInOut('1s', 0, 1),
    flyInOut(),
    scaleUp('1s', 1, 1.5, MY_STATES.start, MY_STATES.end)
  ]
})
export class ForecastItemComponent implements OnInit { 
  public state = MY_STATES.start;
  tempMinType: TEM_PIPES_TYPE = TEM_PIPES_TYPE.MIN;
  tempMaxType: TEM_PIPES_TYPE = TEM_PIPES_TYPE.MAX;
  tempAvgType: TEM_PIPES_TYPE = TEM_PIPES_TYPE.AVG;
  dayTemperatures: number[] = [];
  windDegValues: number[] = [];
  windSpeedValues: number[] = [];
  cloudsValues: number[] = [];
  clouds: number;
  windDeg: number;
  windSpeed: number;
  isCloudy: boolean = false;
  selectedTimes: any[];
  dayTimes: SelectItem[];
  data: any;
  msgs: Message[];
  @Input() day: WeatherListItem[];
  @HostBinding('@flyInOut') flyInOut() {}

  constructor() { }

  ngOnInit() {
  
    this.dayTimes = this.day.map(function(x){ return {label: moment(x.dt_txt).format('HH:MM'), value:x.dt};});
    this.selectedTimes = asEnumerable(this.dayTimes).Select(x=>x.value).ToArray();
    this.initChart();
    
    this.day.forEach(item => {
      this.dayTemperatures.push(item.main.temp);
      this.windDegValues.push(item.wind.deg);
      this.windSpeedValues.push(item.wind.speed);
      this.cloudsValues.push(item.clouds.all);
    });

    let cloudyHours = this.day.reduce((a, b) => {(b.weather[0].main == 'Clouds') ? a++ : a; return a; },0);
    this.isCloudy = cloudyHours > 5;

    let windDegSum = this.windDegValues.reduce( (a, b) => {
      return a + b;
    }, 0)

    this.windDeg = ( windDegSum / this.windDegValues.length );

    let windSpeedSum = this.windSpeedValues.reduce( (a, b) => {
      return a + b;
    }, 0)

    this.windSpeed = parseFloat((windSpeedSum / this.windSpeedValues.length).toFixed());
    
    let cloudsSum = this.cloudsValues.reduce( (a, b) => {
      return a + b;
    }, 0)

    this.clouds = ( cloudsSum / this.cloudsValues.length );
  }

  onChangeTime(e){
    asEnumerable(this.day).Select(x=> {x.isShow = false;}).ToArray();
    asEnumerable(this.day).Where(x=> asEnumerable(e.value).Contains(x.dt)).Select(x=> {x.isShow = true;}).ToArray();
    this.initChart();
  }

  selectData(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
  }

  initChart(){
    let selectedObjects =  asEnumerable(this.day).Where(x=> asEnumerable(this.selectedTimes).Contains(x.dt)).ToArray();
    let labels=  asEnumerable(selectedObjects).Select(x=>  moment(x.dt_txt).format('HH:MM')).ToArray();
    
    this.data = {
      labels:labels,
      datasets: [
          {
              label: moment(this.day[0].dt_txt).format('DD/MM/YYYY'),
              data: asEnumerable(selectedObjects).Select(x=>x.main.temp).ToArray(),
              fill: false,
              borderColor: '#3f51b5'
          }
      ]
  }
  }

  scaleMyself() {
    this.state = this.state === MY_STATES.start ?  MY_STATES.end : MY_STATES.start;
  }
}
