/* eslint-disable prettier/prettier */
import { User } from 'src/user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Membership {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column()
  membershipType: string;

  @Column()
  fee: number;

  @OneToOne(() => User, (user) => user.membership)
  //   @JoinColumn()
  user: User;
}
