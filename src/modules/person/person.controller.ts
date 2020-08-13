import { Controller, Get, Res, HttpStatus, Post, Param, Body } from "@nestjs/common";
import { Response } from 'express';
import { PersonService } from "./person.service";
import { PersonDto } from "./person.dto";
import { ApiTags, ApiResponse, ApiOperation } from "@nestjs/swagger";
import { Person } from "./person.entity";

@ApiTags('Persons')
@Controller('persons')
export class PersonController {
  constructor(private personService: PersonService) { }

  @ApiOperation({ summary: 'Search all people' })
  @ApiResponse({ status: 200, description: 'The found record', type: Person })
  @ApiResponse({ status: 500, description: 'Operation not successful, there was an error with the server.', type: Person })
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

  @ApiOperation({ summary: 'Search specific person' })
  @ApiResponse({ status: 200, description: 'The found record', type: Person })
  @ApiResponse({ status: 500, description: 'Operation not successful, there was an error with the server.', type: Person })
  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    try {
      const response = await this.personService.findOne(id);
      return res.status(response.status).send(response.data);
    } catch (error) {
      if (error.hasOwnProperty('error') && error.hasOwnProperty('hasError')) {
        return res.status(error.status).send({ error: { message: error.error.message } });
      }
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: { message: error.message } });
    }
  }

  @ApiOperation({ summary: 'Create person' })
  @ApiResponse({ status: 200, description: 'Operation performed successfully!', type: Person })
  @ApiResponse({ status: 500, description: 'Operation not successful, there was an error with the server.', type: Person })
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
