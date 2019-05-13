import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {BaseApi} from '../core/base-api';
import {API_KEY} from '../app.config';
import {Key} from '../models/key.model';

@Injectable()
export class WeatherService extends BaseApi {
  apiKey: Key;
  constructor(@Inject(API_KEY) apiKey: Key, public http: HttpClient) {
    super(http);
    this.apiKey = apiKey;
  }

  getCurrentWeather(city: String | Number): Observable<any> {

    if (typeof city === 'number') {
      return this.get(`?id=${city}&appid=${this.apiKey}&units=metric`).map((data: {}) => data);
    }
    return this.get(`?q=${city}&appid=${this.apiKey}&units=metric`).map((data: {}) => data);
  }
}
