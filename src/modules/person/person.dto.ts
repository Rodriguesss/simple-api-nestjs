import { isString } from "util";

import { IsString, IsEnum, IsEmail, MaxLength, IsNumber, IsBoolean, IsObject } from 'class-validator';
import { Role } from "../role/role.entity";

export class PersonDto {

  @IsString()
  @MaxLength(60)
  name: string;

  @IsEnum(['F', 'J'])
  personType: string;

  @IsEmail()
  @MaxLength(80)
  email: string;

  @IsString()
  telephone: string;

  @IsNumber()
  role: number;
}