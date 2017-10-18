import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MatButtonModule, MatCheckboxModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import "hammerjs";
import {AppComponent} from "./app.component";
import {ChronoComponent} from "./chrono/chrono.component";
import {DecToStrPipe} from "./dec-to-str.pipe";

@NgModule({
    declarations: [
        AppComponent,
        ChronoComponent,
        DecToStrPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
