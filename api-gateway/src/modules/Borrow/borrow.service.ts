import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs';
import { BorrowDto } from 'src/dto/borrow.dto';

@Injectable()
export class BorrowService {
  constructor(private httpService: HttpService) {}

  async create(dto: BorrowDto) {
    try {
      const data = this.httpService
        .post(`${process.env.BACKENDPORT}/api/v1/borrow`, dto)
        .pipe(
          map((response) => response.data),
          catchError((e) => {
            throw new HttpException(
              `${e.response.statusText} : ${e.response.data?.errorMessage}`,
              e.response.status,
            );
          }),
        )
        .toPromise();
      return data;
    } catch (error) {
      throw new HttpException(
        `${error.response.statusText} : ${error.response.data?.errorMessage}`,
        error.response.status,
      );
    }
  }

  async returnBook(dto: BorrowDto) {
    try {
      const data = this.httpService
        .post(`${process.env.BACKENDPORT}/api/v1/borrow/returnBook`, dto)
        .pipe(
          map((response) => response.data),
          catchError((e) => {
            throw new HttpException(
              `${e.response.statusText} : ${e.response.data?.errorMessage}`,
              e.response.status,
            );
          }),
        )
        .toPromise();
      return data;
    } catch (error) {
      throw new HttpException(
        `${error.response.statusText} : ${error.response.data?.errorMessage}`,
        error.response.status,
      );
    }
  }

  async check(dto: BorrowDto) {
    try {
      const data = this.httpService
        .post(`${process.env.BACKENDPORT}/api/v1/borrow/check7Days`, dto)
        .pipe(
          map((response) => response.data),
          catchError((e) => {
            throw new HttpException(
              `${e.response.statusText} : ${e.response.data?.errorMessage}`,
              e.response.status,
            );
          }),
        )
        .toPromise();
      return data;
    } catch (error) {
      throw new HttpException(
        `${error.response.statusText} : ${error.response.data?.errorMessage}`,
        error.response.status,
      );
    }
  }

  async penaltyRevivedCheck(dto: BorrowDto) {
    try {
      const data = this.httpService
        .post(`${process.env.BACKENDPORT}/api/v1/borrow/check3Days`, dto)
        .pipe(
          map((response) => response.data),
          catchError((e) => {
            throw new HttpException(
              `${e.response.statusText} : ${e.response.data?.errorMessage}`,
              e.response.status,
            );
          }),
        )
        .toPromise();
      return data;
    } catch (error) {
      throw new HttpException(
        `${error.response.statusText} : ${error.response.data?.errorMessage}`,
        error.response.status,
      );
    }
  }
}
