import { ForecastdayItem } from './forecastday-item';
export class Forecastday {
  private _forecastday: Array<ForecastdayItem> = null;

  /**
   * Getter forecastday
   */
  public get forecastday(): Array<ForecastdayItem> {
    return this._forecastday;
  }

  /**
   * Setter forecastday
   */
  public set forecastday(value: Array<ForecastdayItem>) {
    this._forecastday = value;
  }
}
