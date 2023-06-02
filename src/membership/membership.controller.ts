import { Body, Controller, Param, Post } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { CreateMembershipDto } from './dtos/create-membership.dto';

@Controller('membership')
export class MembershipController {
  constructor(private memberService: MembershipService) {}

  @Post(':id')
  createMembership(
    @Body() member: CreateMembershipDto,
    @Param('id') id: string,
  ) {
    return this.memberService.createMembership(member, id);
  }
}
