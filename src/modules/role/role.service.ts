import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Role } from "./role.entity";
import { Repository } from "typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { RoleDto } from "./role.dto";

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    protected readonly _roleService: Repository<Role>,
  ) { }

  async create(body: RoleDto) {
    const newRole = new Role();
    newRole.role = body.role;
    newRole.description = body.description;
    return await this._roleService.save(newRole);
  }

  async findOne(id: number) {
    return await this._roleService.findOne(id);
  }

  async find() {
    return await this._roleService.find();
  }

}
