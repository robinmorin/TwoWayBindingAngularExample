import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserApiService } from 'src/app/api-services/user-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  public user: User = new User();

  constructor(public userApiService: UserApiService) {

  }

  async ngOnInit() {
    this.user = await this.userApiService.getUserById(23);
  }

}
