import { Module } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { AlunosController } from './alunos.controller';
import { PrismaService } from 'src/prisma';
import { AlunosRepository } from './alunos.repository';

@Module({
  controllers: [AlunosController],
  providers: [AlunosService, PrismaService, AlunosRepository],
})
export class AlunosModule {}
