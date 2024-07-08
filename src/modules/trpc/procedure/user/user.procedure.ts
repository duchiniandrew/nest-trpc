import { UserService } from "../../../../modules/users/service/users.service";
import { TrpcService } from "../../service/trpc.service";
import { z } from 'zod';
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserProcedure {
    constructor(private readonly trpc: TrpcService, private userService: UserService) { }

    create() {
        return this.trpc.procedure
            .input(
                z.object({
                    id: z.number(),
                    name: z.string(),
                }),
            )
            .query(({ input }) => {
                const { id, name } = input;
                return this.userService.create({ id, name });
            });
    }

    find() {
        return this.trpc.procedure
            .query(({ input }) => {
                return this.userService.find();
            });
    }

    findOne() {
        return this.trpc.procedure
            .input(
                z.object({
                    id: z.number(),
                }),
            )
            .query(({ input }) => {
                const { id } = input;
                return this.userService.findOne(id);
            });
    }

    update() {
        return this.trpc.procedure
            .input(
                z.object({
                    id: z.number(),
                    name: z.string(),
                }),
            )
            .query(({ input }) => {
                const { id, name } = input;
                return this.userService.update({ id, name });
            });
    }

    delete() {
        return this.trpc.procedure
            .input(
                z.object({
                    id: z.number(),
                }),
            )
            .query(({ input }) => {
                const { id } = input;
                return this.userService.delete(id);
            });
    }
}