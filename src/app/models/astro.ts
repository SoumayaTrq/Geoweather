export class Astro {
  private _sunrise: string = null;
  private _sunset: string = null;
  private _moonrise: string = null;
  private _moonset: string = null;

  /**
   * Getter sunrise
   */
  public get sunrise(): string {
    return this._sunrise;
  }

  /**
   * Getter sunset
   */
  public get sunset(): string {
    return this._sunset;
  }

  /**
   * Getter moonrise
   */
  public get moonrise(): string {
    return this._moonrise;
  }

  /**
   * Getter moonset
   */
  public get moonset(): string {
    return this._moonset;
  }

  /**
   * Setter sunrise
   */
  public set sunrise(value: string) {
    this._sunrise = value;
  }

  /**
   * Setter sunset
   */
  public set sunset(value: string) {
    this._sunset = value;
  }

  /**
   * Setter moonrise
   */
  public set moonrise(value: string) {
    this._moonrise = value;
  }

  /**
   * Setter moonset
   */
  public set moonset(value: string) {
    this._moonset = value;
  }
}
