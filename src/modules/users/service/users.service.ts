import { CreateUserRequestDto } from "../dto/createUser.dto";
import { UpdateUserRequestDto } from "../dto/updateUser.dto";
import { User } from "../types";

export class UserService {
    private users: User[];

    constructor() {
        this.users = [];
    }

    create(user: CreateUserRequestDto) {
        this.users.push(user)
        return this.users;
    }

    update(user: UpdateUserRequestDto) {
        const foundUser = this.users.find(user => user.id === user.id);
        if (foundUser) {
            foundUser.name = user.name;
        }
    }

    delete(id: number) {
        this.users = this.users.filter(user => user.id !== id);
        return this.users;
    }

    find() {
        return this.users;
    }

    findOne(id: number) {
        return this.users.find(user => user.id === id);
    }
}