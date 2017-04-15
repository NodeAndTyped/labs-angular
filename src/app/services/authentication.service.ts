import {Injectable, EventEmitter} from '@angular/core';
import {User} from "./users.interface";
import {UsersService} from "./users.service";
import {Http} from "@angular/http";

@Injectable()
export class AuthenticationService {

    private _onConnexionChange: EventEmitter<boolean> = new EventEmitter();

    constructor(private usersService: UsersService, private http: Http) {

    }

    /**
     *
     * @param email
     * @param password
     * @returns {boolean}
     */


    public authenticate(email: string, password: string): Promise<boolean> {

        console.log("authenticate user by email", email, "password", password);

        return this
            .http
            .post('/api/users/authenticate', { email: email, password: password })
            .toPromise()
            .then(response => response.json())
            .then(user => {
                this._onConnexionChange.emit(true);
                localStorage.setItem('currentUser', JSON.stringify(user));
                return user;
            });

    }

    public logout(): Promise<any> {

        return this.http
            .patch(`/api/users/${this.user.email}/offline`, {})
            .toPromise()
            .then(response => response.json())
            .then(() => {
                localStorage.removeItem('currentUser');
                this._onConnexionChange.emit(false);
            });

    }

    /**
     *
     * @returns {any}
     */
    public isConnected(): boolean {
        console.log('isConnected =>', localStorage.getItem('currentUser'));
        return !!JSON.parse(localStorage.getItem('currentUser'));
    }

    /**
     *
     * @returns {EventEmitter<User>}
     */
    get onConnectionChange(): EventEmitter<boolean> {
        return this._onConnexionChange;
    }

    get user() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
}
