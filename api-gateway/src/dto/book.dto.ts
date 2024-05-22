import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class BookDto {
  @Type(() => String)
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  code: string;

  @Type(() => String)
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  title: string;

  @Type(() => String)
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  author: string;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  stock: number;
}

export class borrowBookDTO {
  @Type(() => String)
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  memberCode: string;

  @Type(() => String)
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  bookCode: string;
}
