import { Module } from '@nestjs/common';
import { AuthService } from '../../domain/usecase/auth.service';
import { LocalStrategy } from '../../domain/usecase/strategies/local.strategy'
import { JwtStrategy } from '../../domain/usecase/strategies/jwt.strategy';
import { UsersModule } from './users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../domain/entity/constants';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30m' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}