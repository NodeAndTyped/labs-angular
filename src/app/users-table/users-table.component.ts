import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {User} from "../interfaces/user";

@Component({
    selector: "users-table",
    templateUrl: "./users-table.component.html",
    styleUrls: ["./users-table.component.css"]
})
export class UsersTableComponent implements OnInit {

    private _hideOffline: boolean = false;

    @Output()
    private clickUser = new EventEmitter<User>();

    private _users: User[];

    constructor() {
    }

    /**
     *
     */
    ngOnInit() {

    }

    /**
     *
     */
    toggleStatus() {
        this._hideOffline = !this._hideOffline;
    }

    /**
     *
     * @param user
     */
    onClickUser(user) {
        console.log("UserTable, user clicked =>", user);
        this.clickUser.emit(user);
    }

    @Input()
    set users(users: User[]) {
        console.log("Table users =>", users);
        this._users = users;
    }

    get users() {
        return this._users;
    }

    get hideOffline(): boolean {
        return this._hideOffline;
    }

    set hideOffline(value: boolean) {
        this._hideOffline = value;
    }
}
