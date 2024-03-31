import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(username: string, password: string[]): Promise<User>;
    getAllUser(): Promise<User[]>;
}
