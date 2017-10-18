import {NgModule} from "@angular/core";
import {MatButtonModule, MatCheckboxModule, MatInputModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import "hammerjs";
import {AppComponent} from "./app.component";
import {ChronoComponent} from "./chrono/chrono.component";
import {DecToStrPipe} from "./chrono/dec-to-str.pipe";

@NgModule({
    declarations: [
        AppComponent,
        ChronoComponent,
        DecToStrPipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
