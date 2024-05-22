import { Injectable } from '@nestjs/common';
import { MemberDto } from 'src/dtos/member.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MemberService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: MemberDto) {
    try {
      const findMember = await this.prisma.member.findFirst({
        where: {
          code: dto.code,
        },
      });

      if (findMember) {
        throw new Error('Member already exists');
      }

      const member = await this.prisma.member.create({
        data: {
          name: dto.name,
          code: dto.code,
          status: 'active',
        },
      });
      return member;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      let querryArr = [];
      //untuk query params!
      const [count, data] = await this.prisma.$transaction([
        this.prisma.member.count({
          where: {
            AND: querryArr,
          },
        }),
        this.prisma.member.findMany({
          where: {
            AND: querryArr,
          },
        }),
      ]);
      console.log('data', data);

      const findMemberBorrowBooks = await this.prisma.borrow.findMany({
        where: {
          memberCode: {
            in: data.map((x) => x.code),
          },
        },
        select: {
          memberCode: true,
          bookCode: true,
        },
      });
      console.log('findMemberBorrowBooks', findMemberBorrowBooks);

      const datas = data.map((x) => {
        const borrowBooks = findMemberBorrowBooks
          .filter((y) => y.memberCode === x.code)
          .map((z) => z.bookCode);

        return {
          ...x,
          borrowBooks:
            borrowBooks.length > 0 ? borrowBooks : 'No books borrowed',
        };
      });

      return {
        count,
        datas,
      };
    } catch (error) {
      throw error;
    }
  }
}
