import {Pipe, PipeTransform} from "@angular/core";
import {Status} from "../interfaces/status";
import {User} from "../interfaces/user";

@Pipe({
    name: "usersOnline"
})
export class UsersOnlinePipe implements PipeTransform {
    transform(users: User[] = [], showOnline: boolean = true): any {
        return users.filter(user =>
            showOnline ? (user.status === Status.busy || user.status === Status.online) : true
        );
    }
}
