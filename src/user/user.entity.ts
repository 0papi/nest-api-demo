/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  membershipType: string;
}
