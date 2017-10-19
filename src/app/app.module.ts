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
import {RouterModule} from "@angular/router";
import "hammerjs";
import {AdminViewComponent} from "./admin-view/admin-view.component";
import {AppComponent} from "./app.component";
import {ROUTES} from "./app.routes";
import {ChronoComponent} from "./chrono/chrono.component";
import {DecToStrPipe} from "./chrono/dec-to-str.pipe";
import {HomeViewComponent} from "./home-view/home-view.component";
import {LoginViewComponent} from "./login-view/login-view.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {UsersFakeService} from "./services/users.fake.service";
import {UsersService} from "./services/users.service";
import {SignupViewComponent} from "./signup-view/signup-view.component";
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
        UserDialogComponent,
        HomeViewComponent,
        AdminViewComponent,
        LoginViewComponent,
        SignupViewComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [{provide: UsersService, useClass: UsersFakeService}],
    bootstrap: [AppComponent],
    entryComponents: [UserDialogComponent]
})
export class AppModule {
}
