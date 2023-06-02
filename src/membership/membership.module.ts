import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembershipService } from './membership.service';
import { MembershipController } from './membership.controller';
import { Membership } from './membership.entity';

@Module({
  providers: [MembershipService],
  controllers: [MembershipController],
  imports: [TypeOrmModule.forFeature([Membership])],
})
export class MembershipModule {}
