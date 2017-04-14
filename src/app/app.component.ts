import {Component, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {UserDialogComponent} from "./user-dialog/user-dialog.component";
import {User} from "./services/users.interface";
import {UsersService} from "./services/users.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private title: "Labs Angular";
    private users: User[];

    constructor(public dialog: MdDialog, private userService: UsersService) {



    }

    ngOnInit(): void {

        this.userService.getUsers().then(users => {
            console.log("Users =>", users);
            this.users = users;
        });

    }

    private onClickUser(user: User) {

        console.log("Show user dialog =>", user);

        const dialogRef = this.dialog.open(UserDialogComponent);

        dialogRef.componentInstance.user = user;

    }
}
