import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class BaseApi {
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(public http: HttpClient) {}

  private  getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  public  get(url: string = ''): Observable<any> {
    return this.http.get(this.getUrl(url)).map((response) => response);
  }

}
