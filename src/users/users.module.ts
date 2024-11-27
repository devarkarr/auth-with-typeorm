import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { CreateUserProvider } from './providers/create-user/create-user';
import { HashingProvider } from 'src/auth/providers/hashing-provider';
import { BcryptProvider } from 'src/auth/providers/bcrypt-provider';

@Module({
  controllers: [UsersController],
  providers: [UsersService, CreateUserProvider],
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule)],
  exports: [UsersService],
})
export class UsersModule {}
