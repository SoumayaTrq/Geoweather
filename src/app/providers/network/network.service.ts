import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  constructor(private http: HttpClient) {}

  /**
   * GET request
   */
  public get(endpoint: string) {
    const url =
      environment.api.baseUrl + environment.apiKey + `&q=${endpoint}&days=7`;
    return this.http.get(url).toPromise();
  }

  public getDataLocation(endpoint: string) {
    const url = environment.api.citiesUrl + endpoint;
    console.log(url);
    return this.http.get<any>(url).toPromise();
  }
}
