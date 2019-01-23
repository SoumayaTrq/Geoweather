import { Condition } from './condition';
export class Day {
  private _maxtemp_c: number = null;
  private _maxtemp_f: number = null;
  private _mintemp_c: number = null;
  private _mintemp_f: number = null;
  private _avgtemp_c: number = null;
  private _avgtemp_f: number = null;
  private _maxwind_mph: number = null;
  private _maxwind_kph: number = null;
  private _totalprecip_mm: number = null;
  private _totalprecip_in: number = null;
  private _avgvis_km: number = null;
  private _avgvis_miles: number = null;
  private _avghumidity: number = null;
  private _condition: Array<Condition> = null;
  private _uv: number = null;

  /**
   * Getter maxtemp_c
   */
  public get maxtemp_c(): number {
    return this._maxtemp_c;
  }

  /**
   * Getter maxtemp_f
   */
  public get maxtemp_f(): number {
    return this._maxtemp_f;
  }

  /**
   * Getter mintemp_c
   */
  public get mintemp_c(): number {
    return this._mintemp_c;
  }

  /**
   * Getter mintemp_f
   */
  public get mintemp_f(): number {
    return this._mintemp_f;
  }

  /**
   * Getter avgtemp_c
   */
  public get avgtemp_c(): number {
    return this._avgtemp_c;
  }

  /**
   * Getter avgtemp_f
   */
  public get avgtemp_f(): number {
    return this._avgtemp_f;
  }

  /**
   * Getter maxwind_mph
   */
  public get maxwind_mph(): number {
    return this._maxwind_mph;
  }

  /**
   * Getter maxwind_kph
   */
  public get maxwind_kph(): number {
    return this._maxwind_kph;
  }

  /**
   * Getter totalprecip_mm
   */
  public get totalprecip_mm(): number {
    return this._totalprecip_mm;
  }

  /**
   * Getter totalprecip_in
   */
  public get totalprecip_in(): number {
    return this._totalprecip_in;
  }

  /**
   * Getter avgvis_km
   */
  public get avgvis_km(): number {
    return this._avgvis_km;
  }

  /**
   * Getter avgvis_miles
   */
  public get avgvis_miles(): number {
    return this._avgvis_miles;
  }

  /**
   * Getter avghumidity
   */
  public get avghumidity(): number {
    return this._avghumidity;
  }

  /**
   * Getter condition
   */
  public get condition(): Array<Condition> {
    return this._condition;
  }

  /**
   * Getter uv
   */
  public get uv(): number {
    return this._uv;
  }

  /**
   * Setter maxtemp_c
   */
  public set maxtemp_c(value: number) {
    this._maxtemp_c = value;
  }

  /**
   * Setter maxtemp_f
   */
  public set maxtemp_f(value: number) {
    this._maxtemp_f = value;
  }

  /**
   * Setter mintemp_c
   */
  public set mintemp_c(value: number) {
    this._mintemp_c = value;
  }

  /**
   * Setter mintemp_f
   */
  public set mintemp_f(value: number) {
    this._mintemp_f = value;
  }

  /**
   * Setter avgtemp_c
   */
  public set avgtemp_c(value: number) {
    this._avgtemp_c = value;
  }

  /**
   * Setter avgtemp_f
   */
  public set avgtemp_f(value: number) {
    this._avgtemp_f = value;
  }

  /**
   * Setter maxwind_mph
   */
  public set maxwind_mph(value: number) {
    this._maxwind_mph = value;
  }

  /**
   * Setter maxwind_kph
   */
  public set maxwind_kph(value: number) {
    this._maxwind_kph = value;
  }

  /**
   * Setter totalprecip_mm
   */
  public set totalprecip_mm(value: number) {
    this._totalprecip_mm = value;
  }

  /**
   * Setter totalprecip_in
   */
  public set totalprecip_in(value: number) {
    this._totalprecip_in = value;
  }

  /**
   * Setter avgvis_km
   */
  public set avgvis_km(value: number) {
    this._avgvis_km = value;
  }

  /**
   * Setter avgvis_miles
   */
  public set avgvis_miles(value: number) {
    this._avgvis_miles = value;
  }

  /**
   * Setter avghumidity
   */
  public set avghumidity(value: number) {
    this._avghumidity = value;
  }

  /**
   * Setter condition
   */
  public set condition(value: Array<Condition>) {
    this._condition = value;
  }

  /**
   * Setter uv
   */
  public set uv(value: number) {
    this._uv = value;
  }
}
