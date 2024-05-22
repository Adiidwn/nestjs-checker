import { Injectable } from '@nestjs/common';
import { BookDto } from 'src/dtos/book.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: BookDto) {
    try {
      const findBook = await this.prisma.book.findFirst({
        where: {
          code: dto.code,
        },
      });

      if (findBook) {
        throw new Error('Book already exists');
      }

      const create = await this.prisma.book.create({
        data: {
          code: dto.code,
          title: dto.title,
          author: dto.author,
          stock: dto.stock,
          status: 'available',
        },
      });

      return create;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const [count, data] = await this.prisma.$transaction([
        this.prisma.book.count({
          where: {
            status: 'available',
          },
        }),
        this.prisma.book.findMany({
          where: {
            status: 'available',
          },
        }),
      ]);
      return {
        count,
        data,
      };
    } catch (error) {
      throw error;
    }
  }
}
