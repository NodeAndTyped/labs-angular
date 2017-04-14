import {Injectable, EventEmitter} from '@angular/core';
import {User} from "./users.interface";
import {UsersService} from "./users.service";

@Injectable()
export class AuthenticationService {

    private _onConnexionChange: EventEmitter<boolean> = new EventEmitter();

    constructor(private usersService: UsersService) { }

    /**
     *
     * @param email
     * @param password
     * @returns {boolean}
     */
    public authenticate(email: string, password: string): Promise<boolean> {

        console.log("authenticate user by email", email, "password", password);

        return this.usersService
            .get(email)

            .then(user => {

                if (user && user.password === password) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this._onConnexionChange.emit(true);
                    return true;
                }
                this._onConnexionChange.emit(false);
                return false;
            });

    }

    public logout(): Promise<any> {

        localStorage.removeItem('currentUser');
        this._onConnexionChange.emit(false);

        return Promise.resolve();
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
