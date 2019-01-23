import { Location } from './location';
import { Current } from './current';
import { Forecastday } from './forecastday';
export class Weather {
  private _location: Array<Location> = null;
  private _current: Array<Current> = null;
  private _forecast: Array<Forecastday> = null;

  /**
   * Getter location
   */
  public get location(): Array<Location> {
    return this._location;
  }

  /**
   * Getter current
   */
  public get current(): Array<Current> {
    return this._current;
  }

  /**
   * Getter forecast
   */
  public get forecast(): Array<Forecastday> {
    return this._forecast;
  }

  /**
   * Setter location
   */
  public set location(value: Array<Location>) {
    this._location = value;
  }

  /**
   * Setter current
   */
  public set current(value: Array<Current>) {
    this._current = value;
  }

  /**
   * Setter forecast
   */
  public set forecast(value: Array<Forecastday>) {
    this._forecast = value;
  }
}
