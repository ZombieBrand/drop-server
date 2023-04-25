import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ description: '昵称' })
  name: string;

  @Field({ description: '描述', nullable: true })
  desc?: string;

  @Field({ description: '手机号', nullable: true })
  tel?: string;

  @Field({ description: '头像', nullable: true })
  avatar?: string;

  @Field({ description: '验证码', nullable: true })
  code?: string;

  @Field({ description: '验证码生成时间', nullable: true })
  codeCreateTimeAt?: Date;
}
