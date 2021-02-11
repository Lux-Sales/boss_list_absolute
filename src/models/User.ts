/* eslint-disable camelcase */
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

// Como um ddo é salvo na aplicação, como é composto

@Entity('users')
class User {
  public constructor(name: string, vocation: string, team: string) {
    this.name = name;
    this.vocation = vocation;
    this.team = team;
  }

  @PrimaryGeneratedColumn()
  name: string;

  @Column('text')
  vocation: string;

  @Column('text')
  team: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default User;
