import { Injectable } from '@nestjs/common';
import { BookDto, borrowBookDTO } from 'src/dtos/book.dto';
import { BorrowDto } from 'src/dtos/borrow.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BorrowService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: BorrowDto) {
    try {
      console.log('dto', dto);

      const findStatusMember = await this.prisma.member.findFirst({
        where: {
          code: dto.memberCode,
          status: 'active',
        },
      });

      if (!findStatusMember) {
        throw new Error('Member is currently get penaltized');
      }

      if (findStatusMember.limit <= 0) {
        throw new Error('Member has no more limit to borrow');
      }

      const findBookStatus = await this.prisma.book.findFirst({
        where: {
          code: dto.bookCode,
          status: 'available',
        },
      });

      if (!findBookStatus) {
        throw new Error('Book is currently borrowed by other members');
      }

      const findAlreadyBorrow = await this.prisma.borrow.findFirst({
        where: {
          memberCode: dto.memberCode,
          bookCode: dto.bookCode,
        },
      });

      if (findAlreadyBorrow) {
        throw new Error('you already borrow this book');
      }

      const returnDate = new Date();
      returnDate.setSeconds(returnDate.getSeconds() + 60);
      const create = await this.prisma.borrow.create({
        data: {
          memberCode: dto.memberCode,
          bookCode: dto.bookCode,
          borrowTime: new Date(),
          returnTime: returnDate,
        },
      });

      const updateStatusBook = await this.prisma.book.update({
        where: {
          code: create.bookCode,
        },
        data: {
          status: 'borrowed',
        },
      });

      const updateMemberLimit = await this.prisma.member.update({
        where: {
          code: create.memberCode,
        },
        data: {
          limit: { decrement: 1 },
        },
      });

      // const penaltyDay = new Date();
      // console.log('penaltyDay', penaltyDay);
      // console.log('create.returnTime', create.returnTime);

      // if (penaltyDay > create.returnTime) {
      //   const borrowData = await this.prisma.borrow.findFirst({
      //     where: {
      //       memberCode: create.memberCode,
      //       borrowTime: create.borrowTime,
      //     },
      //   });
      //   if (borrowData) {
      //     const createPenalty = await this.prisma.penalty.create({
      //       data: {
      //         memberCode: dto.memberCode,
      //       },
      //     });
      //     console.log('penaltyDay', penaltyDay);

      //     const updateMemberStatus = await this.prisma.member.update({
      //       where: {
      //         code: createPenalty.memberCode,
      //       },
      //       data: {
      //         status: 'penalty',
      //       },
      //     });
      //   }
      // }

      const borrow = {
        memberCode: create.memberCode,
        bookCode: create.bookCode,
        borrowTime: create.borrowTime,
        returnTime: create.returnTime,
        bookStatus: updateStatusBook.status,
        memberLimit: updateMemberLimit.limit,
      };
      return borrow;
    } catch (error) {
      throw error;
    }
  }

  async check() {
    try {
      const overDate = await this.prisma.borrow.findMany({
        where: {
          returnTime: {
            lt: new Date(),
          },
        },
        select: {
          memberCode: true,
          borrowTime: true,
        },
      });

      if (overDate.length > 0) {
        console.log('7 days later found');

        const memberCodes = overDate.map((x) => x.memberCode);

        // Update member status to 'penaltized' in batch
        await this.prisma.member.updateMany({
          where: {
            code: {
              in: memberCodes,
            },
          },
          data: {
            status: 'penaltized',
          },
        });
      }
      return overDate;
    } catch (error) {
      throw error;
    }
  }

  async penaltyCheck() {
    try {
      const penaltyTime = new Date();
      penaltyTime.setSeconds(penaltyTime.getSeconds() - 60);
      const penalty = await this.prisma.penalty.findMany({
        where: {
          createdAt: {
            lt: penaltyTime,
          },
        },
      });
      if (penalty.length > 0) {
        console.log('3 days later found');

        const memberCodes = penalty.map((x) => x.memberCode);
        await this.prisma.penalty.deleteMany({
          where: {
            memberCode: {
              in: memberCodes,
            },
          },
        });

        await this.prisma.member.updateMany({
          where: {
            code: {
              in: memberCodes,
            },
          },
          data: {
            status: 'active',
          },
        });
      }
      return penalty;
    } catch (error) {
      console.error('Error checking penalties:', error);
      throw error;
    }
  }

  async returnBook(dto: BorrowDto) {
    try {
      const returnBook = await this.prisma.borrow.findFirst({
        where: {
          memberCode: dto.memberCode,
          bookCode: dto.bookCode,
        },
      });

      if (!returnBook) {
        throw new Error('Error: You have not borrowed this book');
      }

      const checkPenalty = await this.prisma.member.findFirst({
        where: {
          code: returnBook.memberCode,
        },
        select: {
          status: true,
        },
      });

      if (checkPenalty.status === 'penaltized') {
        await this.prisma.penalty.create({
          data: {
            memberCode: returnBook.memberCode,
          },
        });
      }

      const updateStatusBook = await this.prisma.book.update({
        where: {
          code: returnBook.bookCode,
        },
        data: {
          status: 'available',
        },
      });
      const updateMemberLimit = await this.prisma.member.update({
        where: {
          code: returnBook.memberCode,
        },
        data: {
          limit: { increment: 1 },
        },
      });

      const returnBookData = await this.prisma.borrow.delete({
        where: {
          id: returnBook.id,
        },
      });

      return {
        updateStatusBook,
        updateMemberLimit,
        returnBookData,
      };
    } catch (error) {
      throw error;
    }
  }
}