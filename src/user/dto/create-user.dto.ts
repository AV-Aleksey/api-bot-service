import {
  IsInt,
  IsEmail,
  IsString,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsBoolean()
  payed: boolean;

  @IsOptional()
  @IsInt()
  chatId: number;

  @IsOptional()
  @IsEmail()
  email: string | null;

  @IsOptional()
  @IsString()
  name: string | null;

  @IsOptional()
  @IsInt()
  age: number | null;
}
