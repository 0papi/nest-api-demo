/* eslint-disable prettier/prettier */
import { Membership } from 'src/membership/membership.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  contact: number;

  @Column()
  location: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @OneToOne(() => Membership, { nullable: true })
  //   @JoinColumn()
  membership: Membership;
}
