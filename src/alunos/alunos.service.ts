import { Injectable } from '@nestjs/common';
import { AlunosRepository } from './alunos.repository';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AlunosService {
  constructor(private readonly repository: AlunosRepository) {}

  async create(createAlunoDto: CreateAlunoDto) {
    const hashedPassword = await bcrypt.hash(createAlunoDto.password, 10);
    return this.repository.create({
      ...createAlunoDto,
      password: hashedPassword,
    });
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, updateAlunoDto: UpdateAlunoDto) {
    return this.repository.update(id, updateAlunoDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
