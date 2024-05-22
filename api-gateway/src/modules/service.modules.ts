import { Module } from '@nestjs/common';
import { MemberModule } from './Member/member.module';
import { HttpModule } from '@nestjs/axios';
import { BookModule } from './Book/book.module';
import { BorrowModule } from './Borrow/borrow.module';

@Module({
  imports: [MemberModule, BookModule, BorrowModule, HttpModule],
})
export class ServiceModules {}
