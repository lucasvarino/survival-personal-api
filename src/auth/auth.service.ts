import { Injectable } from '@nestjs/common';
import { AlunosService } from 'src/alunos/alunos.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  curso: string;
  matricula: string;
};

type LoginUser = {
  email: string;
  password: string;
};

@Injectable()
export class AuthService {
  constructor(
    private alunoService: AlunosService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User | null> {
    const user = await this.alunoService.findByEmail(email);

    bcrypt.compare(pass, user.password, () => {
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    });

    return null;
  }

  async login({ name, id }): Promise<any> {
    const payload = { username: name, sub: id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
