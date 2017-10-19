import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {User} from "../interfaces/user";

@Component({
    selector: "app-user-dialog",
    templateUrl: "./user-dialog.component.html",
    styleUrls: ["./user-dialog.component.css"]
})
export class UserDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<UserDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public user: User) {
    }

    ngOnInit() {

    }

}
