import { Injectable } from '@nestjs/common';
import { AlunosService } from 'src/alunos/alunos.service';
import * as bcrypt from 'bcrypt';

type User = {
  id: string;
  name: string;
  password: string;
  curso: string;
  matricula: string;
};

@Injectable()
export class AuthService {
  constructor(private alunoService: AlunosService) {}

  async validateUser(username: string, pass: string): Promise<User | null> {
    const user = await this.alunoService.findOne(username);

    bcrypt.compare(pass, user.password, () => {
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    });

    return null;
  }
}
