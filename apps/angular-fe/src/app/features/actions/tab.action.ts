export class tabAction {
  readonly type = 'addTab' || 'removeTab';
  readonly payload: any;

  constructor(payload: any) {
    this.payload = payload;
  }
}