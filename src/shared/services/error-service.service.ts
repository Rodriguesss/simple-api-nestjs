import { HttpException, HttpStatus } from "@nestjs/common";

export class ErrorService {

  static next(error: unknown) {
    if(error.hasOwnProperty('status')) {
      return error;
    }
    return new HttpException('Houve um erro no sistema.', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
