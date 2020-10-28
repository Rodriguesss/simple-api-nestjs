import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {

  sun(id: number) {
    return id+5;
  }

}
