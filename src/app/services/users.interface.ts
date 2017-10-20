import {Observable} from "rxjs/Observable";
import {User} from "../interfaces/user";

export interface IUsersService {
    getUsers(): Observable<User[]>;

    create(user: User): Observable<User>;

    exists(email: string): Observable<boolean>;

    get(email: string): Observable<User>;
}
