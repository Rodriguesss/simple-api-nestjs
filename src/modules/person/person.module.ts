import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonController } from './person.controller';
import { Person } from './person.entity';
import { PersonService } from './person.service';
import { RoleService } from '../role/role.service';
import { Role } from '../role/role.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Person, Role])],
    controllers: [PersonController],
    providers: [PersonService, RoleService],
})

export class PersonModule { }