import { HttpService } from '@nestjs/axios';
import { MemberDto } from 'src/dto/member.dto';
export declare class MemberService {
    private httpService;
    constructor(httpService: HttpService);
    createMember(dto: MemberDto): Promise<any>;
    getMembers(): Promise<any>;
}
