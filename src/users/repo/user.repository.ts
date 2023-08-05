import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectDataSource } from '@nestjs/typeorm';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(@InjectDataSource() private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  findById(tableName: string, id: number): Promise<User> {
    return this.query(`SELECT * FROM ${tableName} WHERE id=${id}`);
  }
}
