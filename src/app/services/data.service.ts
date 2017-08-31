import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {QueryParameter} from "../models/query-parameter";

@Injectable()
export class DataService {
  data = 'My data from service';
  constructor() { }

  formApiString(query: QueryParameter[]) {
    return environment.BASE_API_URL
      + this.pushArgumentsToUrl(query) + environment.BASE_API_KEY;
  }
  private pushArgumentsToUrl(queryList: QueryParameter[]) {
    let result = '';
    for (const query of queryList) {
      result += query.getFormedString() + '&';
    }
    return result;
  }
}
