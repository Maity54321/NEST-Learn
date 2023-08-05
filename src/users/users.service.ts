import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UsersRepository } from './repo/user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}
  create(createUserDto: CreateUserDto): Promise<User> {
    let user: User = new User();

    const keys = Object.keys(createUserDto);
    keys.map((item) => {
      user[item] = createUserDto[item];
    });
    console.log(user);

    // user.firstName = createUserDto.firstName;
    // user.lastName = createUserDto.lastName;
    // user.email = createUserDto.email;
    // user.phone = createUserDto.phone;
    // user.companyName = createUserDto.companyName;
    // user.companyWebsite = createUserDto.companyWebsite;
    // user.address = createUserDto.address;
    // user.city = createUserDto.city;
    // user.postalCode = createUserDto.postalCode;
    // user.country = createUserDto.country;
    // user.state = createUserDto.state;

    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // findOne(id: any): Promise<User[]> {
  //   return this.userRepository.find({
  //     where: {
  //       id: id,
  //     },
  //   });
  // }

  findById(id: number): Promise<User> {
    return this.userRepository.findById('user', id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user: User = new User();
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    user.email = updateUserDto.email;
    user.phone = updateUserDto.phone;
    user.companyName = updateUserDto.companyName;
    user.email = updateUserDto.companyEmail;
    user.address = updateUserDto.address;
    user.city = updateUserDto.city;
    user.postalCode = updateUserDto.postalCode;
    user.country = updateUserDto.country;
    user.state = updateUserDto.state;
    user.id = id;
    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
