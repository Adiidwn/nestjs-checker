import { BookService } from './book.service';
import { BookDto } from 'src/dto/book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(dto: BookDto): Promise<any>;
    findAll(): Promise<any>;
}
