import { Body, Controller, Post } from '@nestjs/common';
import { BorrowDto } from 'src/dto/borrow.dto';
import { BorrowService } from './borrow.service';

@Controller('borrow')
export class BorrowController {
  constructor(private readonly borrowService: BorrowService) {}

  @Post()
  async create(@Body() dto: BorrowDto) {
    try {
      return await this.borrowService.create(dto);
    } catch (error) {
      throw error;
    }
  }

  @Post('returnBook')
  async returnBook(@Body() dto: BorrowDto) {
    try {
      return await this.borrowService.returnBook(dto);
    } catch (error) {
      throw error;
    }
  }

  @Post('check7Days')
  async check(@Body() dto: BorrowDto) {
    try {
      return await this.borrowService.check(dto);
    } catch (error) {
      throw error;
    }
  }

  @Post('check3Days')
  async penaltyRevivedCheck(@Body() dto: BorrowDto) {
    try {
      return await this.borrowService.penaltyRevivedCheck(dto);
    } catch (error) {
      throw error;
    }
  }
}
