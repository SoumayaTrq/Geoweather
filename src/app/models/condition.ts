export class Condition {
  private _text: string = null;
  private _icon: string = null;
  private _code: string = null;

  /**
   * Getter text
   */
  public get text(): string {
    return this._text;
  }

  /**
   * Getter icon
   */
  public get icon(): string {
    return this._icon;
  }

  /**
   * Getter code
   */
  public get code(): string {
    return this._code;
  }

  /**
   * Setter text
   */
  public set text(value: string) {
    this._text = value;
  }

  /**
   * Setter icon
   */
  public set icon(value: string) {
    this._icon = value;
  }

  /**
   * Setter code
   */
  public set code(value: string) {
    this._code = value;
  }
}
