import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { PersonService } from "./person.service";
import { PersonDto } from "./person.dto";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { ErrorService } from "src/shared/services/error-service.service";

@ApiTags('Persons')
@Controller('persons')
export class PersonController {
  constructor(public _personService: PersonService) { }

  @Post()
  async create(@Body() body: PersonDto) {
    try {
      return await this._personService.create(body);
    } catch(error) {
      ErrorService.next(error);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this._personService.find();
    } catch(error) {
      ErrorService.next(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      return await this.findOne(id);
    } catch(error) {
      ErrorService.next(error);
    }
  }

}
