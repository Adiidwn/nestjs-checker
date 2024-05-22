import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { catchError, map } from 'rxjs';
import { MemberDto } from 'src/dto/member.dto';

@Injectable()
export class MemberService {
  constructor(private httpService: HttpService) {}

  async createMember(dto: MemberDto) {
    try {
      const data = this.httpService
        .post(`${process.env.BACKENDPORT}/api/v1/member`, dto)
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

  async getMembers() {
    try {
      const data = this.httpService
        .get(`${process.env.BACKENDPORT}/api/v1/member`)
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
