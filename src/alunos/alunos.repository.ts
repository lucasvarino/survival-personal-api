import { Injectable } from '@nestjs/common';
import { Aluno, PrismaService } from 'src/prisma';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';

@Injectable()
export class AlunosRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
    return this.prisma.aluno.create({
      data: createAlunoDto,
    });
  }

  async findAll(): Promise<Aluno[]> {
    return this.prisma.aluno.findMany();
  }

  async findOne(id: string): Promise<Aluno> {
    return this.prisma.aluno.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateAlunoDto: UpdateAlunoDto): Promise<Aluno> {
    return this.prisma.aluno.update({
      where: {
        id,
      },
      data: updateAlunoDto,
    });
  }

  async remove(id: string): Promise<Aluno> {
    return this.prisma.aluno.delete({
      where: {
        id,
      },
    });
  }
}
