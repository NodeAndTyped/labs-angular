import {Component, OnInit, Output, EventEmitter, Input} from "@angular/core";
import {User} from "../services/users.interface";

@Component({
    selector: "app-users-table",
    templateUrl: "./users-table.component.html",
    styleUrls: ["./users-table.component.css"],
})
export class UsersTableComponent implements OnInit {

    private hideOffline: boolean = false;

    @Output()
    private clickUser = new EventEmitter<User>();

    private _users: User[];

    constructor() { }

    /**
     *
     */
    ngOnInit() {

    }

    /**
     *
     */
    toggleStatus() {
        this.hideOffline = !this.hideOffline;
    }

    @Input()
    set users(users: User[]){
        console.log("Table users =>", users);
        this._users = users;
    }

    get users() {
        return this._users;
    }

    /**
     *
     * @param user
     */
    onClickUser(user) {
        console.log("UserTable, user clicked =>", user);
        this.clickUser.emit(user);
    }

}
