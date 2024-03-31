import { UserService } from './user.service';
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
    createUser({ username, password }: {
        username: string;
        password: string[];
    }): Promise<import("src/Users/user.entity").User>;
    getAllUser(): Promise<import("src/Users/user.entity").User[]>;
}
