import { Aluno } from '@prisma/client';

export class AlunoEntity implements Aluno {
  id: string;
  name: string;
  email: string;
  password: string;
  matricula: string;
  curso: string;
}
