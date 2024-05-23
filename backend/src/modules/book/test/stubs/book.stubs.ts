import { BookDto } from 'src/dtos/book.dto';

export const bookStub = (): BookDto => {
  return {
    code: 'test',
    title: 'test',
    author: 'test',
    stock: 1,
  };
};
