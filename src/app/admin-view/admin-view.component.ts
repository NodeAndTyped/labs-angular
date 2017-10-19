import {Component, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material";
import {Observable} from "rxjs/Observable";
import {User} from "../interfaces/user";
import {UsersService} from "../services/users.service";
import {UserDialogComponent} from "../user-dialog/user-dialog.component";

@Component({
    selector: "app-admin-view",
    templateUrl: "./admin-view.component.html",
    styleUrls: ["./admin-view.component.css"]
})
export class AdminViewComponent implements OnInit {
    get observableUsers(): Observable<User[]> {
        return this._observableUsers;
    }

    set observableUsers(value: Observable<User[]>) {
        this._observableUsers = value;
    }

    private _observableUsers: Observable<User[]>;

    constructor(public dialog: MatDialog, private userService: UsersService) {


    }

    ngOnInit(): void {
        this._observableUsers = this.userService.getUsers();
    }

    private onClickUser(user: User) {

        console.log("Show user dialog =>", user);

        const dialogRef = this.dialog.open(UserDialogComponent, {
            data: user
        });
    }
}
