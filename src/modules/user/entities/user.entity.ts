import { ObjectType, Field } from '@nestjs/graphql';
import { IsNotEmpty, Matches } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * 用户实体
 */
@Entity('user')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field({ description: '用户id', nullable: true })
  id: string;

  @Column({
    comment: '昵称',
    default: '',
  })
  @IsNotEmpty()
  @Index()
  @Field({ description: '昵称' })
  name: string;

  @Column({
    comment: '描述',
    nullable: true,
    default: '',
  })
  @Field({ description: '描述', nullable: true })
  desc?: string;

  @Column({
    comment: '手机号',
    nullable: true,
  })
  @Matches(/^1[3-9]\d{9}$/, { message: '请输入正确的手机号码' })
  @Field({ description: '手机号', nullable: true })
  tel?: string;

  @Column({
    comment: '头像',
    nullable: true,
  })
  @Field({ description: '头像', nullable: true })
  avatar?: string;

  @Column({
    comment: '验证码',
    nullable: true,
    default: '',
  })
  @Field({ description: '验证码', nullable: true })
  code?: string;

  @CreateDateColumn({
    comment: '验证码生成时间',
    nullable: true,
  })
  @Field({ description: '验证码生成时间', nullable: true })
  codeCreateTimeAt?: Date;
}
