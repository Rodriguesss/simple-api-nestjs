import { Controller, Get, Param, Body, Post } from "@nestjs/common";
import { RoleService } from "./role.service";
import { ApiTags, ApiOperation } from "@nestjs/swagger";
import { ErrorService } from "src/shared/services/error-service.service";
import { RoleDto } from "./role.dto";

@ApiTags('Role')
@Controller('roles')
export class RoleController {
  constructor(public _roleService: RoleService) { }

  @Post()
  async create(@Body() body: RoleDto) {
    try {
      return await this._roleService.create(body);
    } catch(error) {
      ErrorService.next(error);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this._roleService.find();
    } catch(error) {
      ErrorService.next(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      return await this._roleService.findOne(id);
    } catch(error) {
      ErrorService.next(error);
    }
  }

}