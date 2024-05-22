import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class BookDto {
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsNumber()
  @IsNotEmpty()
  stock: number;
}

export class borrowBookDTO {
  @IsString()
  @IsNotEmpty()
  memberCode: string;

  @IsString()
  @IsNotEmpty()
  bookCode: string;
}
