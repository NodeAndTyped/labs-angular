import {Component} from "@angular/core";


@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    public title: string = "Labs Angular";

    constructor() {
        console.log(this.title);
    }
}
