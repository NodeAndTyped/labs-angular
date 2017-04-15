import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {User} from "../services/users.interface";

@Component({
    selector: 'dialog-user',
    templateUrl: 'user-dialog.component.html',
    styleUrls: ['user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

    public user: User;

    constructor(
        public dialogRef: MdDialogRef<UserDialogComponent>
    ) {
        console.log(dialogRef.componentInstance);
    }

    ngOnInit() {

    }

}
