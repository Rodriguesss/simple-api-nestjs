import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "./person.entity";
import { Repository } from "typeorm";
import { PersonDto } from "./person.dto";
import { Role } from "../role/role.entity";
@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    protected readonly _personRepository: Repository<Person>,
    @InjectRepository(Role)
    protected readonly _roleRepository: Repository<Role>,
  ) {}

  async findOne(object: any) {
    return await this._personRepository.findOne(object);
  }

  async create(body: PersonDto) {
    const newPerson = new Person();
    newPerson.name = body.name;
    newPerson.personType = body.personType;
    newPerson.telephone = body.telephone;
    newPerson.email = body.email;
    newPerson.role = await this._roleRepository.findOne(body.role);
    return await this._personRepository.save(newPerson);
  }

  async find() {
    return await this._personRepository.find();
  }

}
