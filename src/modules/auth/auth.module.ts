import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { PersonModule } from '../person/person.module';

@Module({
  imports: [PersonModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
