import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Like } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user: User = new User();

    user.email = createUserDto.email;
    user.chatId = createUserDto.chatId;
    user.payed = createUserDto.payed;
    user.name = createUserDto.name;
    user.age = createUserDto.age;

    return this.userRepository.save(user);
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  findAll(size: number, page: number, email?: string) {
    const take = size || 10;
    const skip = page ? (page - 1) * take : 0; 

    const whereCondition = email ? { email: Like(`%${email}%`) } : {}; 

    return this.userRepository.find({
      where: whereCondition,
      skip,
      take,
      order: { id: 'ASC' }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user: User = new User();

    user.email = updateUserDto.email;
    user.payed = updateUserDto.payed;
    user.name = updateUserDto.name;
    user.age = updateUserDto.age;

    user.id = id;

    return this.userRepository.save(user);
  }

  delete(id: number) {
    return this.userRepository.delete(id);
  }
}
