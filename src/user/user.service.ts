import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async create(user) {
    // check if user already exists or not
    const existingUser = await this.userRepo.findOne({
      where: {
        email: user.email,
      },
    });

    if (!existingUser) {
      // note that creating the instance before saving helps to carry out any Before or After hooks
      const newUser = this.userRepo.create({
        address: user.address,
        contact: user.contact,
        email: user.email,
        location: user.location,
        name: user.name,
        password: user.password,
      });
      return this.userRepo.save(newUser);
    } else {
      // refactor this to be handled properly
      throw new ConflictException('User already exists');
    }
  }
}
