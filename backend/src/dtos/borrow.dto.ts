import { IsNotEmpty, IsString } from 'class-validator';

export class BorrowDto {
  @IsString()
  @IsNotEmpty()
  memberCode: string;

  @IsString()
  @IsNotEmpty()
  bookCode: string;
}
