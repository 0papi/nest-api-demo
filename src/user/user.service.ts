import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  create(user) {
    const newUser = this.userRepo.create({
      address: user.address,
      contact: user.contact,
      email: user.email,
      location: user.location,
      membershipType: user.membershipType,
      name: user.name,
      password: user.password,
    });

    return this.userRepo.save(newUser);
  }
}
