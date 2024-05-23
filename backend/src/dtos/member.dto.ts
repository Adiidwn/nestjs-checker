import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class MemberDto {
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  code: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
