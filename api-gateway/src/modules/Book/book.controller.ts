import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from 'src/dto/book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() dto: BookDto) {
    try {
      return await this.bookService.createBook(dto);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.bookService.getBooks();
    } catch (error) {
      throw error;
    }
  }
}
