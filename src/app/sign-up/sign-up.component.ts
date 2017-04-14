import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../services/users.service";
import {User, Status} from "../services/users.interface";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    private user: User = new User();
    private error: string;

    constructor(
        private router: Router,
        private userService: UsersService
    ) { }

    ngOnInit() { }

    /**
     *
     */
    signup() {

        this.error = "";

        this.userService
            .exists(this.user.email)
            .then((exists) => {
                if (!exists) {
                    this.userService.create(this.user);
                } else {
                    this.error = "L'utilisateur existe déjà !";
                }
            })
            .then(() => this.router.navigate(['']))
            .catch(err => {
                console.error(err);
            });

    }

}
