import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  constructor(public userService: UserService) {}

  usersData: any = signal('');

  ngOnInit() {
    this.usersData.set(this.userService.userList());
  }
}
