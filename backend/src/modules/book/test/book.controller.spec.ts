import { Test } from '@nestjs/testing';
import { BookService } from '../book.service';
import { BookController } from '../book.controller';
import { BookDto } from 'src/dtos/book.dto';
import { bookStub } from './stubs/book.stubs';
import { PrismaService } from 'src/prisma.service';

jest.mock('../book.service');

describe('BookController', () => {
  let bookService: BookService;
  let bookController: BookController;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [BookController],
      providers: [BookService, PrismaService],
    }).compile();

    bookController = moduleRef.get<BookController>(BookController);
    bookService = moduleRef.get<BookService>(BookService);
    prismaService = moduleRef.get<PrismaService>(PrismaService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    describe('when create is called', () => {
      let create: BookDto;

      beforeEach(async () => {
        create = await bookController.create(bookStub());
      });

      test('should call bookService.create', () => {
        expect(bookService.create).toHaveBeenCalledWith(bookStub());
      });
    });
  });
});
