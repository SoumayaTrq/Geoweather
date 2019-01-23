import * as moment from 'moment';
import { Condition } from './condition';

export class Current {
  private _last_updated_epoch: number = null;
  private _last_updated: moment.Moment = null;
  private _temp_c: number = null;
  private _temp_f: number = null;
  private _is_day: number = null;
  private _condition: Array<Condition> = null;
  private _wind_mph: number = null;
  private _wind_kph: number = null;
  private _wind_degree: number = null;
  private _wind_dir: string = null;
  private _pressure_mb: number = null;
  private _pressure_in: number = null;
  private _precip_mm: number = null;
  private _precip_in: number = null;
  private _humidity: number = null;
  private _cloud: number = null;
  private _feelslike_c: number = null;
  private _feelslike_f: number = null;
  private _vis_km: number = null;
  private _vis_miles: number = null;
  private _uv: number = null;

  /**
   * Getter last_updated_epoch
   */
  public get last_updated_epoch(): number {
    return this._last_updated_epoch;
  }

  /**
   * Getter last_updated
   */
  public get last_updated(): moment.Moment {
    return this._last_updated;
  }

  /**
   * Getter temp_c
   */
  public get temp_c(): number {
    return this._temp_c;
  }

  /**
   * Getter temp_f
   */
  public get temp_f(): number {
    return this._temp_f;
  }

  /**
   * Getter is_day
   */
  public get is_day(): number {
    return this._is_day;
  }

  /**
   * Getter condition
   */
  public get condition(): Array<Condition> {
    return this._condition;
  }

  /**
   * Getter wind_mph
   */
  public get wind_mph(): number {
    return this._wind_mph;
  }

  /**
   * Getter wind_kph
   */
  public get wind_kph(): number {
    return this._wind_kph;
  }

  /**
   * Getter wind_degree
   */
  public get wind_degree(): number {
    return this._wind_degree;
  }

  /**
   * Getter wind_dir
   */
  public get wind_dir(): string {
    return this._wind_dir;
  }

  /**
   * Getter pressure_mb
   */
  public get pressure_mb(): number {
    return this._pressure_mb;
  }

  /**
   * Getter pressure_in
   */
  public get pressure_in(): number {
    return this._pressure_in;
  }

  /**
   * Getter precip_mm
   */
  public get precip_mm(): number {
    return this._precip_mm;
  }

  /**
   * Getter precip_in
   */
  public get precip_in(): number {
    return this._precip_in;
  }

  /**
   * Getter humidity
   */
  public get humidity(): number {
    return this._humidity;
  }

  /**
   * Getter cloud
   */
  public get cloud(): number {
    return this._cloud;
  }

  /**
   * Getter feelslike_c
   */
  public get feelslike_c(): number {
    return this._feelslike_c;
  }

  /**
   * Getter feelslike_f
   */
  public get feelslike_f(): number {
    return this._feelslike_f;
  }

  /**
   * Getter vis_km
   */
  public get vis_km(): number {
    return this._vis_km;
  }

  /**
   * Getter vis_miles
   */
  public get vis_miles(): number {
    return this._vis_miles;
  }

  /**
   * Getter uv
   */
  public get uv(): number {
    return this._uv;
  }

  /**
   * Setter last_updated_epoch
   */
  public set last_updated_epoch(value: number) {
    this._last_updated_epoch = value;
  }

  /**
   * Setter last_updated
   */
  public set last_updated(value: moment.Moment) {
    this._last_updated = value;
  }

  /**
   * Setter temp_c
   */
  public set temp_c(value: number) {
    this._temp_c = value;
  }

  /**
   * Setter temp_f
   */
  public set temp_f(value: number) {
    this._temp_f = value;
  }

  /**
   * Setter is_day
   */
  public set is_day(value: number) {
    this._is_day = value;
  }

  /**
   * Setter condition
   */
  public set condition(value: Array<Condition>) {
    this._condition = value;
  }

  /**
   * Setter wind_mph
   */
  public set wind_mph(value: number) {
    this._wind_mph = value;
  }

  /**
   * Setter wind_kph
   */
  public set wind_kph(value: number) {
    this._wind_kph = value;
  }

  /**
   * Setter wind_degree
   */
  public set wind_degree(value: number) {
    this._wind_degree = value;
  }

  /**
   * Setter wind_dir
   */
  public set wind_dir(value: string) {
    this._wind_dir = value;
  }

  /**
   * Setter pressure_mb
   */
  public set pressure_mb(value: number) {
    this._pressure_mb = value;
  }

  /**
   * Setter pressure_in
   */
  public set pressure_in(value: number) {
    this._pressure_in = value;
  }

  /**
   * Setter precip_mm
   */
  public set precip_mm(value: number) {
    this._precip_mm = value;
  }

  /**
   * Setter precip_in
   */
  public set precip_in(value: number) {
    this._precip_in = value;
  }

  /**
   * Setter humidity
   */
  public set humidity(value: number) {
    this._humidity = value;
  }

  /**
   * Setter cloud
   */
  public set cloud(value: number) {
    this._cloud = value;
  }

  /**
   * Setter feelslike_c
   */
  public set feelslike_c(value: number) {
    this._feelslike_c = value;
  }

  /**
   * Setter feelslike_f
   */
  public set feelslike_f(value: number) {
    this._feelslike_f = value;
  }

  /**
   * Setter vis_km
   */
  public set vis_km(value: number) {
    this._vis_km = value;
  }

  /**
   * Setter vis_miles
   */
  public set vis_miles(value: number) {
    this._vis_miles = value;
  }

  /**
   * Setter uv
   */
  public set uv(value: number) {
    this._uv = value;
  }
}
