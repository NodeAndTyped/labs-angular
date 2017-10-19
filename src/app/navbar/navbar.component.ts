import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {

    private isConnected: boolean = false;
    /**
     *
     */
    @Input()
    public title: string;
    /**
     *
     */
    private subscription;

    constructor() {
        console.log(this.title);
        console.log("check logged authenticated user", this.isConnected);

    }

    ngOnInit() {

    }
}
