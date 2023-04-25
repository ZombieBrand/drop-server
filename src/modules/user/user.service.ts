import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(createUserInput: CreateUserInput) {
    const res = await this.usersRepository.insert(createUserInput);
    if (res && res.raw.affectedRows > 0) {
      return true;
    }
    return false;
  }

  async findOne(id: string) {
    const res = await this.usersRepository.findOne({
      where: {
        id,
      },
    });
    return res;
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const res = await this.usersRepository.update(id, updateUserInput);
    if (res.affected > 0) {
      return true;
    }
    return false;
  }

  async remove(id: string) {
    const res = await this.usersRepository.delete(id);
    if (res.affected > 0) {
      return true;
    }
    return false;
  }
}
