import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AlunosModule } from './alunos/alunos.module';
import { AuthModule } from './auth/auth.module';
import { ProfessoresModule } from './professores/professores.module';
import { EventosModule } from './eventos/eventos.module';

@Module({
  imports: [PrismaModule, AlunosModule, AuthModule, ProfessoresModule, EventosModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
