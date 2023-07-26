export abstract class Builder<T> {
  protected readonly _item: T;

  constructor(overwrites: Partial<T> = {}) {
    this._item = {
      ...this.getDefault(),
      ...overwrites,
    };
  }

  abstract getDefault(): T;

  build(): T {
    return this._item;
  }
}
