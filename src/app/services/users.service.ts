import { Injectable } from '@angular/core';
import { IUsersService, User } from "./users.interface";

@Injectable()
export class UsersService implements IUsersService {

    constructor() { }


    getUsers(): Promise<User[]> {
        return null;
    }
}
