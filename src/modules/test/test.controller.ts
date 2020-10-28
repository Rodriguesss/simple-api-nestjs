import { Controller, Get } from '@nestjs/common';
import { Aluno, Professor } from './aluno';
import { TestService } from './test.service';

@Controller('test')
export class TestController {

  constructor(
    private _testeAluno: TestService
  ) { }

  // @Get()
  // sun(id: number) {
  //   return this._testeAluno.sun(id);
  // }

  @Get('test')
  moon() {
    return new Professor();
  }
}
