import { Injectable } from '@nestjs/common';
import type { CreateUserDto } from './dto/create-user.dto';
import type { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { differenceInCalendarYears } from 'date-fns';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepostiory: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const age = createUserDto.dob
      ? this.calculateAge(createUserDto.dob)
      : undefined;
    const user = this.usersRepostiory.create({ ...createUserDto, age: age });
    return this.usersRepostiory.save(user);
  }

  findAll() {
    return this.usersRepostiory.find();
  }

  findOne(id: string) {
    const user = this.usersRepostiory.findOneBy({ id });
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepostiory.update(id, updateUserDto);
  }

  async remove(id: string) {
    return await this.usersRepostiory.delete(id);
  }

  private calculateAge(dob: Date) {
    return differenceInCalendarYears(new Date(), dob);
  }
}
