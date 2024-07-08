import { Module } from '@nestjs/common';
import { TrpcService } from './service/trpc.service';
import { TrpcRouter } from './router/trpc.router';
import { UserService } from '../users/service/users.service';
import { UserProcedure } from './procedure/user/user.procedure';

@Module({
    imports: [],
    controllers: [],
    providers: [
        TrpcService, 
        TrpcRouter, 
        UserService,
        UserProcedure,
    ],
})
export class TrpcModule {}