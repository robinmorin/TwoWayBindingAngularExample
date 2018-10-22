export class User {

    id: number;
    username: string;
    name: string;
    lastname: string;
    email: string;
    website: string;
    publicInfo: string;
    password: string;

   constructor() {
      this.id = 0;
      this.username = '';
      this.name = '';
      this.lastname = '';
      this.email = '';
      this.website = '';
      this.publicInfo = '';
      this.password = '';
   }

}
