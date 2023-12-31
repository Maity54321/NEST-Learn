import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column({
    type: 'bigint',
  })
  phone: number;
  @Column()
  companyName: string;
  @Column({
    nullable: true,
  })
  companyWebsite: string;
  @Column()
  address: string;
  @Column()
  city: string;
  @Column()
  postalCode: number;
  @Column()
  country: string;
  @Column()
  state: string;
}
