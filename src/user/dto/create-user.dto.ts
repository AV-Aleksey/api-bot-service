import {
  IsBoolean,
  IsEmail,
  IsEmpty,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsBoolean()
  payed: boolean;

  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid Email.' })
  email: string;

  @IsEmpty()
  @IsString()
  name: string;

  @IsEmpty()
  @IsString()
  stage: string;

  @IsEmpty()
  @IsInt()
  age: number;

  @IsEmpty()
  @IsString()
  time: string;

  @IsEmpty()
  @IsString()
  @IsEnum(['f', 'm'])
  gender: string;
}
