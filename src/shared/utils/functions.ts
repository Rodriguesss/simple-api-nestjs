import { JwtService } from '@nestjs/jwt';

export function getTokenData(token: string) {

  const jwtService = new JwtService({});

  const split = token.split('Bearer ');

  if (split.length === 2) {
      return jwtService.decode(split[1]);
  }

  return jwtService.decode(token);
}