import { HttpService } from '@nestjs/axios';
import { BorrowDto } from 'src/dto/borrow.dto';
export declare class BorrowService {
    private httpService;
    constructor(httpService: HttpService);
    create(dto: BorrowDto): Promise<any>;
    returnBook(dto: BorrowDto): Promise<any>;
    check(dto: BorrowDto): Promise<any>;
    penaltyRevivedCheck(dto: BorrowDto): Promise<any>;
}
