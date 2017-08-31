import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';
import {DataService} from "../services/data.service";
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  providers: [
    DataService
  ]
})
export class CitiesComponent implements OnInit {
  listOfCities = [];
  typedArray: City [] = [];
  get dataFromService() {
    return 'Mock';
    // return this.dataService.data;
  }
  // constructor(private dataService: DataService) { }
  // constructor(private dataService: DataService) { }
  ngOnInit() {
    this.listOfCities = [
      {
        "_id": "59a5922e2283efac395da9f1",
        "isActive": false,
        "temperature": "$1,449.99",
        "picture": "http://placehold.it/32x32",
        "eyeColor": "green",
        "name": "Compton Jackson",
        "gender": "male",
        "company": "ASSISTIX"
      },
      {
        "_id": "59a5922e04bcbf65c1cab418",
        "isActive": true,
        "temperature": "$3,145.00",
        "picture": "http://placehold.it/32x32",
        "eyeColor": "blue",
        "name": "Fuller Johnson",
        "gender": "male",
        "company": "SONIQUE"
      },
      {
        "_id": "59a5922e77aa60d60c4cdd06",
        "isActive": false,
        "temperature": "$1,317.53",
        "picture": "http://placehold.it/32x32",
        "eyeColor": "blue",
        "name": "Briggs Pitts",
        "gender": "male",
        "company": "COMVERGES"
      },
      {
        "_id": "59a5922eaa72ce10abc7146f",
        "isActive": true,
        "temperature": "$2,682.89",
        "picture": "http://placehold.it/32x32",
        "eyeColor": "blue",
        "name": "Elvira Cline",
        "gender": "female",
        "company": "NIQUENT"
      },
      {
        "_id": "59a5922edcb2c16e13945585",
        "isActive": true,
        "temperature": "$3,042.69",
        "picture": "http://placehold.it/32x32",
        "eyeColor": "green",
        "name": "Loraine Acosta",
        "gender": "female",
        "company": "MANGLO"
      }
    ];
    this.getCities();
  }
  catchDeleting(index) {
    // console.log(index);
    this.typedArray.splice(index, 1);
  }

  private getCities() {
    for (const serverCity of this.listOfCities ) {
      this.typedArray.push(new City(
        serverCity.isActive, serverCity.temperature, serverCity.picture, serverCity.name));
    }
    console.log(this.typedArray);
  }

}
