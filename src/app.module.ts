import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DataSource } from "typeorm";
import { UsersModule } from "./users/users.module";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, DatabaseModule],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
