import { Body, Controller, Delete, Post } from '@nestjs/common';
import { BorrowDto } from 'src/dtos/borrow.dto';
import { BorrowService } from './borrow.service';

@Controller('borrow')
export class BorrowController {
  constructor(private readonly borrowService: BorrowService) {}

  @Post()
  async create(@Body() dto: BorrowDto) {
    try {
      const create = await this.borrowService.create(dto);
      return {
        status: 'success',
        data: create,
        message: 'Book borrowed successfully',
      };
    } catch (error) {
      throw error;
    }
  }

  @Post('check7Days')
  async check() {
    try {
      const check7Days = await this.borrowService.check();

      let status = 'pending';
      if (check7Days.overDate.length > 0) {
        status = 'success';
      }
      let message = '';
      if (check7Days.overDate.length > 0) {
        message = 'check 7 days successfully ';
      }
      return {
        status,
        data: check7Days,
        message,
      };
    } catch (error) {
      throw error;
    }
  }

  @Post('returnBook')
  async returnBook(@Body() dto: BorrowDto) {
    try {
      const returnBook = await this.borrowService.returnBook(dto);

      return {
        status: 'success',
        data: returnBook,
        message: 'Book returned successfully ',
      };
    } catch (error) {
      throw error;
    }
  }

  @Post('check3Days')
  async penaltyRevivedCheck() {
    try {
      const penaltyRevivedCheck = await this.borrowService.penaltyCheck();
      let status = 'pending';
      if (penaltyRevivedCheck.penalty.length > 0) {
        status = 'success';
      }
      let message = '';
      if (penaltyRevivedCheck.penalty.length > 0) {
        message = 'check 7 days successfully ';
      }
      return {
        status,
        data: penaltyRevivedCheck,
        message,
      };
    } catch (error) {
      throw error;
    }
  }
}
