import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAlunoDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  matricula: string;

  @IsString()
  @IsNotEmpty()
  curso: string;
}
