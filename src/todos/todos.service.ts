import { Injectable } from '@nestjs/common';
import type { UpdateTodoDto } from './dto/update-todo.dto';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import type { CreateTodoParams } from './types/todos.types';
import type { OffsetParams } from 'src/utils/types/params.types';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  create(createTodoParams: CreateTodoParams) {
    const todo = this.todoRepository.create(createTodoParams);
    return this.todoRepository.save(todo);
  }

  findOneById(id: string) {
    return this.todoRepository.findOneBy({ id });
  }

  findOffset({ skip, take }: OffsetParams) {
    return this.todoRepository.find({
      skip: skip,
      take: take,
    });
  }

  // findCursor({orderBy, }: ) {
  //   return this.todoRepository.find({
  //     where:
  //   })
  // }

  findAll() {
    return this.todoRepository.find();
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoRepository.update(id, updateTodoDto);
  }

  remove(id: string) {
    return this.todoRepository.delete(id);
  }
}
