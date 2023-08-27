import { Injectable } from "@nestjs/common";
import type { UpdateTodoDto } from "./dto/update-todo.dto";
import { Repository } from "typeorm";
import { Todo } from "./entities/todo.entity";
import { InjectRepository } from "@nestjs/typeorm";
import type { CreateTodoParams } from "./types/todos.types";

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  create(createTodoParams: CreateTodoParams) {
    const todo = this.todoRepository.create(createTodoParams);
    return this.todoRepository.save(todo);
  }

  findAll() {
    return this.todoRepository.find();
  }

  findOne(id: string) {
    return this.todoRepository.findOneBy({ id });
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoRepository.update(id, updateTodoDto);
  }

  remove(id: string) {
    return this.todoRepository.delete(id);
  }
}
