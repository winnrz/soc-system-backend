import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { CurrentUser, JwtPayload } from '../types';
import { Role } from '@prisma/client';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: any) => {
          // Express
          if (req?.cookies?.['refresh_token']) {
            return req.cookies['refresh_token'];
          }

          // Fastify
          if (req?.request?.cookies?.['refresh_token']) {
            return req.request.cookies['refresh_token'];
          }

          return null;
        },
      ]),
      secretOrKey: configService.get<string>('JWT_REFRESH_SECRET')!,
    });
  }

  async validate(
    payload: JwtPayload,
  ): Promise<CurrentUser> {
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}
