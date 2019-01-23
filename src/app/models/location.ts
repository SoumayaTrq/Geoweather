import * as moment from 'moment';

export class Location {
  private _name: string = null;
  private _region: string = null;
  private _country: string = null;
  private _lat: number = null;
  private _lon: number = null;
  private _tz_id: string = null;
  private _localtime_epoch: number = null;
  private _localtime: moment.Moment = null;

  public get name(): string {
    return this._name;
  }

  public get region(): string {
    return this._region;
  }

  public get country(): string {
    return this._country;
  }

  public get lat(): number {
    return this._lat;
  }

  public get lon(): number {
    return this._lon;
  }

  public get tz_id(): string {
    return this._tz_id;
  }

  public get localtime_epoch(): number {
    return this._localtime_epoch;
  }

  public get localtime(): moment.Moment {
    return this._localtime;
  }

  public set name(value: string) {
    this._name = value;
  }

  public set region(value: string) {
    this._region = value;
  }

  public set country(value: string) {
    this._country = value;
  }

  public set lat(value: number) {
    this._lat = value;
  }

  public set lon(value: number) {
    this._lon = value;
  }

  public set tz_id(value: string) {
    this._tz_id = value;
  }

  public set localtime_epoch(value: number) {
    this._localtime_epoch = value;
  }

  public set localtime(value: moment.Moment) {
    this._localtime = value;
  }
}
