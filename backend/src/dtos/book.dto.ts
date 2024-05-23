import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class BookDto {
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  code: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  author: string;

  @IsNumber()
  @ApiProperty()
  @IsNotEmpty()
  stock: number;
}

export class borrowBookDTO {
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  memberCode: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  bookCode: string;
}
