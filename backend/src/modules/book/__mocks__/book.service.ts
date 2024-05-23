import { bookStub } from '../test/stubs/book.stubs';

export const BookService = jest.fn().mockImplementation(() => ({
  create: jest.fn().mockResolvedValue(bookStub()),
}));
