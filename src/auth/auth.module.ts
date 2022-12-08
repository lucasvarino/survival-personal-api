import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AlunosModule } from 'src/alunos/alunos.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [AlunosModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
