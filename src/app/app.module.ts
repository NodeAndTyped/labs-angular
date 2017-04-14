import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
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
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        {provide: UsersService, useClass: FakeUsersService}
    ],
    bootstrap: [AppComponent],
    entryComponents: [UserDialogComponent]
})
export class AppModule { }
