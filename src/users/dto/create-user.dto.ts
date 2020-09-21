import { IsString, ValidateNested } from 'class-validator';

export class CreateUserDto {
  @IsString()
  email: string
}

export class CreateProfilesDto {
  @IsString()
  nickName: string

  @IsString()
  firstName: string

  @IsString()
  lastName: string

}

export class CreateUserProfilesDto {
  @ValidateNested({each: true})
  public user: CreateUserDto;

  @ValidateNested({each: true})
  public profile: CreateProfilesDto;
}
