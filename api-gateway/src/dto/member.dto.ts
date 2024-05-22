import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class MemberDto {
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  code: string;

  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  name: string;
}
