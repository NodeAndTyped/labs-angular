import {Component, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material";
import {Observable} from "rxjs/Observable";
import {UsersService} from "./services/users.service";
import {UserDialogComponent} from "./user-dialog/user-dialog.component";
import {User} from "./interfaces/user";


@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

    private title: string = "Labs Angular";
    public observableUsers: Observable<User[]>;

    constructor(public dialog: MatDialog, private userService: UsersService) {


    }

    ngOnInit(): void {
        this.observableUsers = this.userService.getUsers();
    }

    private onClickUser(user: User) {

        console.log("Show user dialog =>", user);

        const dialogRef = this.dialog.open(UserDialogComponent, {
            data: user
        });
    }
}
