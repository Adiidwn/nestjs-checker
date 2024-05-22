import { Body, Controller, Get, Post } from '@nestjs/common';
import { MemberDto } from 'src/dto/member.dto';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  async create(@Body() memberDto: MemberDto) {
    try {
      return await this.memberService.createMember(memberDto);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.memberService.getMembers();
    } catch (error) {
      throw error;
    }
  }
}
