import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BorrowController } from './borrow.controller';
import { BorrowService } from './borrow.service';

@Module({
  imports: [HttpModule],
  controllers: [BorrowController],
  providers: [BorrowService],
  exports: [BorrowService],
})
export class BorrowModule {}
