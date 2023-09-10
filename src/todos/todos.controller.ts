import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseInterceptors,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { UsersService } from 'src/users/users.service';
import { ErrorInterceptor } from 'src/interceptors/ErrorInterceptor';

@UseInterceptors(ErrorInterceptor)
@Controller('todos')
export class TodosController {
  constructor(
    private readonly todosService: TodosService,
    private readonly userService: UsersService,
  ) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    const user = await this.userService.findOne(createTodoDto.userId);
    if (!user) throw new NotFoundException();
    return this.todosService.create({ ...createTodoDto, user });
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const todo = await this.todosService.findOneById(id);
    return todo;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.remove(id);
  }
}
