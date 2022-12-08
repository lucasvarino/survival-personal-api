import { Injectable } from '@nestjs/common';
import { AlunosRepository } from './alunos.repository';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';

@Injectable()
export class AlunosService {
  constructor(private readonly repository: AlunosRepository) {}

  create(createAlunoDto: CreateAlunoDto) {
    return this.repository.create(createAlunoDto);
  }

  findAll() {
    return this.findAll();
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
