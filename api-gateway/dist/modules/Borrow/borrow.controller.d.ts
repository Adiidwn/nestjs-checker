import { BorrowDto } from 'src/dto/borrow.dto';
import { BorrowService } from './borrow.service';
export declare class BorrowController {
    private readonly borrowService;
    constructor(borrowService: BorrowService);
    create(dto: BorrowDto): Promise<any>;
    returnBook(dto: BorrowDto): Promise<any>;
    check(dto: BorrowDto): Promise<any>;
    penaltyRevivedCheck(dto: BorrowDto): Promise<any>;
}
