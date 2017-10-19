import {Routes} from "@angular/router";
import {AdminViewComponent} from "./admin-view/admin-view.component";
import {HomeViewComponent} from "./home-view/home-view.component";
import {LoginViewComponent} from "./login-view/login-view.component";
import {SignupViewComponent} from "./signup-view/signup-view.component";

export const ROUTES: Routes = [
    {path: "", component: HomeViewComponent},
    {path: "admin", component: AdminViewComponent},
    {path: "login", component: LoginViewComponent},
    {path: "signup", component: SignupViewComponent},
    {path: "**", redirectTo: ""}
];

