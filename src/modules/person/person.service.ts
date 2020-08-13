import { Injectable, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "./person.entity";
import { Repository, createQueryBuilder, getRepository } from "typeorm";
import { IResponse } from "src/shared/interfaces/interface.response";
import { SuccessResponse } from "src/shared/responses/sucess.response";
import { ErrorResponse } from "src/shared/responses/error.response";
import { PersonDto } from "./person.dto";

@Injectable()
export class PersonService{
  constructor(
    @InjectRepository(Person)
    private readonly _personRepository: Repository<Person>,
  ) { }

    async findAll(): Promise<IResponse> {
      try {
        const persons = await this._personRepository.find();

        return new SuccessResponse({ data: persons }, HttpStatus.OK);
      } catch(error) {
        throw new ErrorResponse({ message: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    async findOne(id: number): Promise<IResponse> {
      try {
        const person = await this._personRepository.findOne(id);

        return new SuccessResponse({ data: person }, HttpStatus.OK);
      } catch(error) {
        throw new ErrorResponse({ message: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    async create(data: PersonDto): Promise<IResponse> {
      try {
        const newPerson = new Person(data);
        console.log(data);
        console.log(newPerson);

        await this._personRepository.save(newPerson);

        return new SuccessResponse({ data: 'Criado com sucesso' }, HttpStatus.CREATED);
      } catch(error) {
        throw new ErrorResponse({ message: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

}
