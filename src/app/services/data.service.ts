import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/repeat';

@Injectable()
export class DataService {
  data = 'My data from service';
  private readonly GET_DIVIDER = '&';
  public listenMessage = new Subject <string>();
  constructor(private http: HttpClient) {
  }
  sendMessage(message: string) {
    this.listenMessage.next(message);
  }
  clearMessage() {
    this.listenMessage.next();
  }
  getMessage(): Observable<any> {
    return this.listenMessage.asObservable();
  }
  makeRequestToServer(params: HttpParams): Observable <any> {
    try {
      const defaultParam = new HttpParams()
        .set('units', environment.BASE_API_UNITS)
        .set('appid', environment.BASE_API_URL);
      for (const key of params.keys()) {
        defaultParam.set(key, params.get(key));
      }
      console.log(defaultParam);
      // const allParams = Object.assign(defaultParam, params);
      return this.http.get(environment.BASE_API_URL, {params: params});
    } catch (e) {
      console.log(e.message);
    }
  }
}
