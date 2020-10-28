import { Test, TestingModule } from '@nestjs/testing';
import { TestController } from './test.controller';
import { Aluno, Professor } from './aluno';
import { TestService } from './test.service';

describe('Test Controller', () => {
  let controller: TestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestController],
      providers: [TestService],
    }).compile();

    controller = module.get<TestController>(TestController);
  });

  it('moon retorna professor?', () => {
    expect(controller.moon()).toBeInstanceOf(Professor);
  });

  // it('deve somar +5 no numero', () => {
  //   expect(service.sun(5)).toEqual(10);
  // });

  // it('deve verificar se o retorno da controller possui uma instancia de aluno', () => {
  //   expect(controller.moon()).toBeInstanceOf(Aluno);
  // });
});
