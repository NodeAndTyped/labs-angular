export const Status: {[K in string]: K} = {
    online: "online",
    offline: "offline",
    busy: "busy"
};

export type Status = keyof typeof Status;

export class UserCredential {
    email: string;
    password: string;
}

export class User extends UserCredential {
    id: number;
    firstName: string;
    lastName: string;
    status: Status;
}

export interface IUsersService {
    getUsers(): Promise<User[]>;
    create(user: User): Promise<User>;
    exists(email: string): Promise<boolean>;
    get(email: string): Promise<User>;
}