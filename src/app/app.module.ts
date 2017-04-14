import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ROUTES} from "./app.routes";
import {AuthenticationService} from "./authentication.service";
import { DialogUserComponent } from './dialog-user/dialog-user.component';
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { UsersOnlinePipe } from './users-table/users-online.pipe';
import {UsersService} from "./services/users.service";
import {FakeUsersService} from "./services/users.fake.service";

@NgModule({
    declarations: [
        AppComponent,
        UsersTableComponent,
        UserDialogComponent,
        UsersOnlinePipe
        HomeComponent,
        LoginComponent,
        SignUpComponent,
        DialogUserComponent,
        NavbarComponent

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [
        {provide: UsersService, useClass: FakeUsersService},
        {provide: AuthenticationService, useClass: AuthenticationService}
    ],
    bootstrap: [AppComponent],
    entryComponents: [UserDialogComponent]
})
export class AppModule { }
