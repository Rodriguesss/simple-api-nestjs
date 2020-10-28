import { IsString, MaxLength } from "class-validator";

export class RoleDto {

@IsString()
@MaxLength(60)
role: string;

@IsString()
@MaxLength(80)
description: string;

}