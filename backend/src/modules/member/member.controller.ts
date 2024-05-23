import { Body, Controller, Get, Post } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberDto } from 'src/dtos/member.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Member')
@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  async create(@Body() memberDto: MemberDto) {
    try {
      const create = await this.memberService.create(memberDto);
      return create;
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async findAll() {
    try {
      const { count, datas } = await this.memberService.findAll();
      return {
        datas,
        total: count,
      };
    } catch (error) {
      throw error;
    }
  }
}
