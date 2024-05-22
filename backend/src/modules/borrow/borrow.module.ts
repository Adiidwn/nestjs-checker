import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { BorrowController } from './borrow.controller';
import { BorrowService } from './borrow.service';

@Module({
  imports: [],
  controllers: [BorrowController],
  providers: [BorrowService, PrismaService],
})
export class BorrowModule {}
