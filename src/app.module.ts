import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { MembershipModule } from './membership/membership.module';
import { Membership } from './membership/membership.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: 'db.sqlite',
      type: 'sqlite',
      synchronize: true,
      entities: [User, Membership],
    }),
    UserModule,
    MembershipModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
