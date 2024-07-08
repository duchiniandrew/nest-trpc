import { Module } from "@nestjs/common";
import { UserService } from "./service/users.service";

@Module({
    imports: [],
    controllers: [],
    providers: [UserService]
})
export class UserModule {}