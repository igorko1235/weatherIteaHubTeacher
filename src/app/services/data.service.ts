import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {QueryParameter} from "../models/query-parameter";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/repeat';

@Injectable()
export class DataService {
  data = 'My data from service';
  private readonly GET_DIVIDER = '&';
  public listenMessage = new Subject <string>();
  sendMessage(message: string) {
    this.listenMessage.next(message);
  }
  clearMessage() {
    this.listenMessage.next();
  }
  constructor(private http: HttpClient) {
  }
  getMessage(): Observable<any> {
    return this.listenMessage.asObservable();
  }

  private formApiString(query: QueryParameter[] | QueryParameter) {
    return environment.BASE_API_URL
      + this.pushArgumentsToUrl(query) + environment.BASE_API_KEY;
  }
  private pushArgumentsToUrl(queryList: QueryParameter[] | QueryParameter) {
    let result = '';
    if (queryList instanceof QueryParameter) {
      result += queryList.getFormedString() + this.GET_DIVIDER;
      return result;
    } else {
      for (const query of queryList) {
        result += query.getFormedString() + this.GET_DIVIDER;
      }
      return result;
    }
  }
  makeRequestToServer(query: QueryParameter[] | QueryParameter): Observable <any> {
    try {
      return this.http.get(this.formApiString(query));
    } catch (e) {
      console.log(e.message);
    }
  }
}
