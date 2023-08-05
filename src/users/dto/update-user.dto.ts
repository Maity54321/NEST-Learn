import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  companyName: string;
  companyEmail: string;
  address: string;
  city: string;
  postalCode: number;
  country: string;
  state: string;
}
