import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BorrowDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  memberCode: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  bookCode: string;
}

export class createBorrowDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  memberCode: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  bookCode: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  bookStatus: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  borrowTime: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  returnTime: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  memberLimit: number;
}
