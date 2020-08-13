import { IResponse } from '../interfaces/interface.response';

export class SuccessResponse implements IResponse {
  message: string = null;
  status: number;
  data: object;
  hasError = false;

  constructor(data: object, status: number) {
    this.data = data;
    this.status = status;
  }
}