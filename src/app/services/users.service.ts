import { Injectable } from '@angular/core';
import { IUsersService, User } from "./users.interface";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Observable} from "rxjs";

@Injectable()
export class UsersService implements IUsersService {

    constructor(private http: Http) { }


    create(user: User): Promise<User> {
        return this.http
            .post('/api/users', {user})
            .map(response => response.json())
            .toPromise();
    }

    exists(email: string): Promise<boolean> {
        return this.http
            .get(`/api/users/exists/${email}`)
            .map(response => response.json())
            .toPromise();
    }

    getUsers(): Promise<User[]> {
        return this.http
            .get('api/users')
            .map(response => response.json())
            .toPromise();
    }


    getObservableUsers(): Observable<User[]> {

        return this.http
            .get('api/users')
            .map(response => response.json());
    }

    get(email: string): Promise<User> {
        console.log("find user by email", email);
        return this.http
            .get(`/api/users/${email}`)
            .map(response => response.json())
            .toPromise();
    }
}
