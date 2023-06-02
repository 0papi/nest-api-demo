import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Membership } from './membership.entity';

@Injectable()
export class MembershipService {
  constructor(
    @InjectRepository(Membership) private memberRepo: Repository<Membership>,
  ) {}

  async createMembership(member: any, id: any) {
    const newMember = this.memberRepo.create({
      endDate: member.endDate,
      fee: member.fee,
      membershipType: member.membershipType,
      startDate: member.startDate,
      user: id,
    });

    return this.memberRepo.save(newMember);
  }
}
