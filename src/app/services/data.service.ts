import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/pluck';

@Injectable()
export class DataService {
  currentPosition: Position;
  private geolocationCathed = new Subject <Position>();
  private loadingThread = new Subject <boolean>();
  constructor(private http: HttpClient) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( positions => {
        this.currentPosition = positions;
        this.sendPosition(positions);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }
  toggleLoading(isShow: boolean) {
    this.loadingThread.next(isShow);
  }
  listenToogling(): Observable<boolean> {
    return this.loadingThread.asObservable();
  }
  sendPosition(position: Position) {
    this.geolocationCathed.next(position);
  }
  getPosition(): Observable<Position> {
    return this.geolocationCathed.asObservable();
  }
  searchWeahter(search: string): Observable<any> {
    const request = new HttpParams()
      .set('appid', environment.BASE_API_KEY)
      .set('units', environment.BASE_API_UNITS)
      .set('type', environment.BASE_API_SEARCH_TYPE)
      .set('q', search);
    return this.http.get(environment.BASE_SEARCH_URL, {params: request})
      .pluck('list');
  }
  getCurrentWeahter(positions: Position): Observable<any> {
    const request = new HttpParams()
      .set('appid', environment.BASE_API_KEY)
      .set('units', environment.BASE_API_UNITS)
      .set('lat', positions.coords.latitude.toString())
      .set('lon', positions.coords.longitude.toString());
    return this.http.get(environment.BASE_CURRENT_WEATHER_URL, {params: request});
  }
  getForecastByCityID(cityID: string): Observable<any> {
    const request = new HttpParams()
      .set('appid', environment.BASE_API_KEY)
      .set('units', environment.BASE_API_UNITS)
      .set('id', cityID);
    return this.http.get(environment.BASE_FORECAST_URL, {params: request});
  }
  getForecastByPositions(positions: Position): Observable<any> {
    const request = new HttpParams()
      .set('appid', environment.BASE_API_KEY)
      .set('units', environment.BASE_API_UNITS)
      .set('lat', positions.coords.latitude.toString())
      .set('lon', positions.coords.longitude.toString());
    return this.http.get(environment.BASE_FORECAST_URL, {params: request});
  }
}
