import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DataSource } from "typeorm";
import { UsersModule } from "./users/users.module";
import { DatabaseModule } from "./database/database.module";
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, DatabaseModule, TodosModule],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
