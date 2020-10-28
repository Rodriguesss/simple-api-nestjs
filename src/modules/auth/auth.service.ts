
import { Injectable, HttpStatus, HttpService } from '@nestjs/common';
import { PersonService } from '../person/person.service';
import { Person } from '../person/person.entity'

@Injectable()
export class AuthService {
  constructor(private personService: PersonService) {}

  async validateUser(email: string, pass: string): Promise<Person> {
    const person = await this.personService.findOne({ where: { email }});
    if (person && person.password === pass) {
      return person;
    }
    return null;
  }
}