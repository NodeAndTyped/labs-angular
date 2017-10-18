///<reference path="user-dialog/user-dialog.component.ts"/>
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MatButtonModule, MatCardModule, MatCheckboxModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import "hammerjs";
import {AppComponent} from "./app.component";
import {ChronoComponent} from "./chrono/chrono.component";
import {DecToStrPipe} from "./dec-to-str.pipe";
import {UsersTableComponent} from "./users-table/users-table.component";
import {UserDialogComponent} from "./user-dialog/user-dialog.component";
import {UsersOnlinePipe} from "./users-table/users-online.pipe";
import {UsersService} from "./services/users.service";
import {FakeUsersService} from "./services/users.fake.service";

@NgModule({
    declarations: [
        AppComponent,
        ChronoComponent,
        DecToStrPipe,
        UsersTableComponent,
        UserDialogComponent,
        UsersOnlinePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule
    ],
    providers: [
        {provide: UsersService, useClass: FakeUsersService}
    ],
    bootstrap: [AppComponent],
    entryComponents: [UserDialogComponent]
})
export class AppModule { }
