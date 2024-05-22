import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto, borrowBookDTO } from 'src/dtos/book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() dto: BookDto) {
    try {
      console.log('dto,', dto);

      const create = await this.bookService.create(dto);
      return create;
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async findAll() {
    try {
      const { count, data } = await this.bookService.findAll();

      return {
        data,
        total: count,
      };
    } catch (error) {
      throw error;
    }
  }
}
