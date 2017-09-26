import {Clouds} from './clouds';
import {Coord} from './coord';
import {Main} from './main';
import {Sys} from './sys';
import {Weather} from './weather';
import {Wind} from './wind';

export class WeatherListItem {
  id: number;
  base: string;
  clouds: Clouds;
  dt: number;
  dt_txt: string;
  cod: string;
  coord: Coord;
  main: Main;
  name: string;
  sys: Sys;
  visibility: number;
  rain: any;
  snow: any;
  weather: Weather[];
  wind: Wind;
  isShow: boolean = true;
}
