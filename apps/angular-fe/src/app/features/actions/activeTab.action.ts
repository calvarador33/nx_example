export class activeTabAction {
  readonly type = 'updateActiveTab'
  readonly payload: number;

  constructor(payload: any) {
    this.payload = payload;
  }
}