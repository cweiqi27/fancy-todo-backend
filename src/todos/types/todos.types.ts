import type { User } from 'src/users/entities/user.entity';
import type { CreateTodoDto } from '../dto/create-todo.dto';

export type CreateTodoParams = Omit<CreateTodoDto, 'userId'> & {
  user: User;
};
