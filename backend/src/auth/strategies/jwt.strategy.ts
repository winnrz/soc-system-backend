import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CurrentUser, JwtPayload } from '../types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: any) => {
          // For Express
          if (req?.cookies && req.cookies['access_token']) {
            return req.cookies['access_token'];
          }

          // For Fastify
          if (req?.request?.cookies && req.request.cookies['access_token']) {
            return req.request.cookies['access_token'];
          }

          // Return null if no cookie found
          return null;
        },
      ]),
      secretOrKey: configService.get<string>('JWT_SECRET')!,
    });
  }

  async validate(payload: JwtPayload): Promise<CurrentUser> {
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}
