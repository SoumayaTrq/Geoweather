import * as moment from 'moment';
import { Day } from './day';
import { Astro } from './astro';

export class ForecastdayItem {
  private _date: moment.Moment = null;
  private _date_epoch: number = null;
  private _day: Array<Day> = null;
  private _astro: Array<Astro> = null;

  /**
   * Getter date
   */
  public get date(): moment.Moment {
    return this._date;
  }

  /**
   * Getter date_epoch
   */
  public get date_epoch(): number {
    return this._date_epoch;
  }

  /**
   * Getter day
   */
  public get day(): Array<Day> {
    return this._day;
  }

  /**
   * Getter astro
   */
  public get astro(): Array<Astro> {
    return this._astro;
  }

  /**
   * Setter date
   */
  public set date(value: moment.Moment) {
    this._date = value;
  }

  /**
   * Setter date_epoch
   */
  public set date_epoch(value: number) {
    this._date_epoch = value;
  }

  /**
   * Setter day
   */
  public set day(value: Array<Day>) {
    this._day = value;
  }

  /**
   * Setter astro
   */
  public set astro(value: Array<Astro>) {
    this._astro = value;
  }
}
