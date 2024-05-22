import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class BorrowDto {
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  memberCode: string;

  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  bookCode: string;
}
