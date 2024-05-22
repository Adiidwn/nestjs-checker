import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs';
import { BookDto } from 'src/dto/book.dto';

@Injectable()
export class BookService {
  constructor(private httpService: HttpService) {}

  async createBook(dto: BookDto) {
    try {
      const data = this.httpService
        .post(`${process.env.BACKENDPORT}/api/v1/book`, dto)
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

  async getBooks() {
    try {
      const data = this.httpService
        .get(`${process.env.BACKENDPORT}/api/v1/book`)
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
