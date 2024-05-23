import { MemberDto } from 'src/dto/member.dto';
import { MemberService } from './member.service';
export declare class MemberController {
    private readonly memberService;
    constructor(memberService: MemberService);
    create(memberDto: MemberDto): Promise<any>;
    findAll(): Promise<any>;
}
