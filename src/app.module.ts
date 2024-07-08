import { Module } from '@nestjs/common';
import { TrpcModule } from './modules/trpc/trpc.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [TrpcModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
