import {NgModule} from "@angular/core";
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule
} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import "hammerjs";
import {AppComponent} from "./app.component";
import {ChronoComponent} from "./chrono/chrono.component";
import {DecToStrPipe} from "./chrono/dec-to-str.pipe";
import {UsersFakeService} from "./services/users.fake.service";
import {UsersService} from "./services/users.service";
import {UserDialogComponent} from "./user-dialog/user-dialog.component";
import {UsersOnlinePipe} from "./users-table/users-online.pipe";
import {UsersTableComponent} from "./users-table/users-table.component";

@NgModule({
    declarations: [
        AppComponent,
        ChronoComponent,
        DecToStrPipe,
        UsersTableComponent,
        UsersOnlinePipe,
        UserDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule
    ],
    providers: [{provide: UsersService, useClass: UsersFakeService}],
    bootstrap: [AppComponent],
    entryComponents: [UserDialogComponent]
})
export class AppModule {
}
