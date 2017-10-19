import {Injectable} from "@angular/core";
import {IUsersService} from "./users.interface";
import {Observable} from "rxjs/Observable";
import {User} from "../interfaces/user";

@Injectable()
export class UsersService implements IUsersService {


    constructor() {
    }


    getUsers(): Observable<User[]> {
        return null;
    }

    create(user: User): Observable<User> {
        return null;
    }

    exists(email: string): Observable<boolean> {
        return null;
    }

    get(email: string): Observable<User> {
        return null;
    }
}
