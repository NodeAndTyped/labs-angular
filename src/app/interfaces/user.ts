import {UserCredential} from "./user-credential";
import {Status} from "./status";

export class User extends UserCredential {
    id?: number;
    firstName: string;
    lastName: string;
    status: Status;
}