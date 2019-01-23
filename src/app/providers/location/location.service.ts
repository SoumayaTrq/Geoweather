import { Injectable } from '@angular/core';
import { NetworkService } from '../network/network.service';
import { MapperService } from '../mapper/mapper.service';
import { Weather } from '../../models/weather';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(
    private networkService: NetworkService,
    private mapperService: MapperService
  ) {}

  public getLocation(locationSearched: string): Promise<any> {
    return this.networkService.get(locationSearched).then(location => {
      if (location) {
        const ArrayWeather = this.mapperService._mapJsonToWeather(location);
        return Promise.resolve(ArrayWeather);
      } else {
        return Promise.reject('Error');
      }
    });
  }
}
