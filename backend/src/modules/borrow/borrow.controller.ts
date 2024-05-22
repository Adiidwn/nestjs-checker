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
      return create;
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
  async check() {
    try {
      await this.borrowService.check();
    } catch (error) {
      throw error;
    }
  }

  @Post('check3Days')
  async penaltyRevivedCheck() {
    try {
      await this.borrowService.penaltyCheck();
    } catch (error) {
      throw error;
    }
  }
}
