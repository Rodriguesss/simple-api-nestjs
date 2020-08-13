import { Controller, Get, Res, HttpStatus, Post, Param, Body } from "@nestjs/common";
import { Response, response } from 'express';
import { PersonService } from "./person.service";
import { PersonDto } from "./person.dto";

@Controller('persons')
export class PersonController {
  constructor(private personService: PersonService) { }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const response = await this.personService.findAll();
      return res.status(response.status).send(response.data);
    } catch (error) {
      if (error.hasOwnProperty('error') && error.hasOwnProperty('hasError')) {
        return res.status(error.status).send({ error: { message: error.error.message } });
      }
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: { message: error.message } });
    }
  }

  @Get(':id')
  async findOne(@Res() res: Response) {
    try {
      const response = await this.personService.findOne();
      return res.status(response.status).send(response.data);
    } catch (error) {
      if (error.hasOwnProperty('error') && error.hasOwnProperty('hasError')) {
        return res.status(error.status).send({ error: { message: error.error.message } });
      }
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: { message: error.message } });
    }
  }

  @Post('create-person')
  async create(@Res() res: Response, @Body() body: PersonDto) {
    try {
      const response = await this.personService.create(body);
      return res.status(response.status).send(response.data);
    } catch (error) {
      if (error.hasOwnProperty('error') && error.hasOwnProperty('hasError')) {
        return res.status(error.status).send({ error: { message: error.error.message } });
      }
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: { message: error.message } });
    }
  }
}
