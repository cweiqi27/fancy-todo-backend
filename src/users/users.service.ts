import { Injectable } from "@nestjs/common";
// import type { CreateUserDto } from "./dto/create-user.dto";
// import type { UpdateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepostiory: Repository<User>,
  ) {}

  // create(createUserDto: CreateUserDto) {
  //   return this.usersRepostiory.save();
  // }

  findAll() {
    return this.usersRepostiory.find();
  }

  findOne(id: number) {
    return this.usersRepostiory.findOneBy({ id });
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  async remove(id: number) {
    await this.usersRepostiory.delete(id);
  }
}
