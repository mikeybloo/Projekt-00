import { IsEmail, isNotEmpty, IsNotEmpty } from 'class-validator'

export class LoginUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  password: string
}
