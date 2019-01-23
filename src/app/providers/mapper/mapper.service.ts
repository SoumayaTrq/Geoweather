import { Injectable } from '@angular/core';
import { Location } from '../../models/location';
import { Condition } from '../../models/condition';
import { Current } from '../../models/current';
import { Weather } from '../../models/weather';
import { Forecastday } from '../../models/forecastday';
import { Astro } from '../../models/astro';
import { Day } from '../../models/day';
import { ForecastdayItem } from '../../models/forecastday-item';

@Injectable({
  providedIn: 'root'
})
export class MapperService {
  constructor() {}

  /**
   * Location mapper
   */
  public _mapJsonToLocation(locationJson): Location {
    const location = new Location();
    location.name = locationJson['name'] ? locationJson['name'] : null;
    location.region = locationJson['region'] ? locationJson['region'] : null;
    location.country = locationJson['country'] ? locationJson['country'] : null;
    location.lat = locationJson['lat'] ? locationJson['lat'] : null;
    location.lon = locationJson['lon'] ? locationJson['lon'] : null;
    location.lon = locationJson['lon'] ? locationJson['lon'] : null;
    location.tz_id = locationJson['tz_id'] ? locationJson['tz_id'] : null;
    location.localtime = locationJson['localtime']
      ? locationJson['localtime']
      : null;
    location.localtime_epoch = locationJson['localtime_epoch']
      ? locationJson['localtime_epoch']
      : null;

    return location;
  }
  // Locations mapper
  public _mapJsonToLocations(arrayOfLactaions): Array<Location> {
    return arrayOfLactaions.map(data => this._mapJsonToLocation(data));
  }

  /**
   * Condition mapper
   */
  public _mapJsonToCondition(conditionJson): Condition {
    const condition = new Condition();
    condition.text = conditionJson['text'] ? conditionJson['text'] : null;
    condition.icon = conditionJson['icon'] ? conditionJson['icon'] : null;
    condition.code = conditionJson['code'] ? conditionJson['code'] : null;

    return condition;
  }
  // Conditions mapper
  public _mapJsonToConditions(arrayOfConditions): Array<Condition> {
    return arrayOfConditions.map(data => this._mapJsonToCondition(data));
  }

  /**
   * Current mapper
   */
  public _mapJsonToCurrent(currentJson): Current {
    const current = new Current();
    current.cloud = currentJson['cloud'] ? currentJson['cloud'] : null;
    current.condition = currentJson['condition']
      ? this._mapJsonToConditions(currentJson['condition'])
      : null;
    current.feelslike_c = currentJson['feelslike_c']
      ? currentJson['feelslike_c']
      : null;
    current.feelslike_f = currentJson['feelslike_f']
      ? currentJson['feelslike_f']
      : null;
    current.humidity = currentJson['humidity'] ? currentJson['humidity'] : null;
    current.is_day = currentJson['is_day'] ? currentJson['is_day'] : null;
    current.last_updated = currentJson['last_updated']
      ? currentJson['last_updated']
      : null;
    current.last_updated_epoch = currentJson['last_updated_epoch']
      ? currentJson['last_updated_epoch']
      : null;
    current.precip_in = currentJson['precip_in']
      ? currentJson['precip_in']
      : null;
    current.precip_mm = currentJson['precip_mm']
      ? currentJson['precip_mm']
      : null;
    current.pressure_in = currentJson['pressure_in']
      ? currentJson['pressure_in']
      : null;
    current.pressure_mb = currentJson['pressure_mb']
      ? currentJson['pressure_mb']
      : null;
    current.temp_c = currentJson['temp_c'] ? currentJson['temp_c'] : null;
    current.temp_f = currentJson['temp_f'] ? currentJson['temp_f'] : null;
    current.uv = currentJson['uv'] ? currentJson['uv'] : null;
    current.vis_km = currentJson['vis_km'] ? currentJson['vis_km'] : null;
    current.vis_miles = currentJson['vis_miles']
      ? currentJson['vis_miles']
      : null;
    current.wind_degree = currentJson['wind_degree']
      ? currentJson['wind_degree']
      : null;
    current.wind_dir = currentJson['wind_dir'] ? currentJson['wind_dir'] : null;
    current.wind_kph = currentJson['wind_kph'] ? currentJson['wind_kph'] : null;
    current.wind_mph = currentJson['wind_mph'] ? currentJson['wind_mph'] : null;

    return current;
  }
  // Currents mapper
  public _mapJsonToCurrents(arrayOfCurrents): Array<Current> {
    return arrayOfCurrents.map(data => this._mapJsonToCurrent(data));
  }

  /**
   * Weather mapper
   */
  public _mapJsonToWeather(weatherJson): Weather {
    const weather = new Weather();
    weather.location = weatherJson['location'] ? weatherJson['location'] : null;
    weather.current = weatherJson['current'] ? weatherJson['current'] : null;
    weather.forecast = weatherJson['forecast'] ? weatherJson['forecast'] : null;

    return weather;
  }
}
