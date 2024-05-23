import { HttpService } from '@nestjs/axios';
import { BookDto } from 'src/dto/book.dto';
export declare class BookService {
    private httpService;
    constructor(httpService: HttpService);
    createBook(dto: BookDto): Promise<any>;
    getBooks(): Promise<any>;
}
