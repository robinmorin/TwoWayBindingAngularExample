import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserApiService {

    public async getUserById(id: number): Promise<User> {
        const user = new User();
        user.id = 23;
        user.username = 'jperez';
        user.name = 'John';
        user.lastname = 'Doe';
        user.email = 'jdoe@neocomplexx.com';
        user.website = 'www.neocomplexx.com';
        user.publicInfo = 'A good guy!';
        return user;
     }

}
