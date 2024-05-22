import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  imports: [HttpModule],
  controllers: [BookController],
  providers: [BookService],
  exports: [BookService],
})
export class BookModule {}
