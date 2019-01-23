export class City {
  private _country: string = null;
  private _lat: string = null;
  private _lng: string = null;
  private _name: string = null;

  /**
   * Getter country
   */
  public get country(): string {
    return this._country;
  }

  /**
   * Getter lat
   */
  public get lat(): string {
    return this._lat;
  }

  /**
   * Getter lng
   */
  public get lng(): string {
    return this._lng;
  }

  /**
   * Getter name
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter country
   */
  public set country(value: string) {
    this._country = value;
  }

  /**
   * Setter lat
   */
  public set lat(value: string) {
    this._lat = value;
  }

  /**
   * Setter lng
   */
  public set lng(value: string) {
    this._lng = value;
  }

  /**
   * Setter name
   */
  public set name(value: string) {
    this._name = value;
  }
}
