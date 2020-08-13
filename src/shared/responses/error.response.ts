import { IResponse } from '../interfaces/interface.response';

export class ErrorResponse implements IResponse {
  message: string;
  status: number;
  data: object = null;
  hasError = true;

  constructor(message: any, status: number) {
    this.message = message;
    this.status = status;
  }
}