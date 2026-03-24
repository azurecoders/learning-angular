import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { User } from '../../services/userDataType';
import { UsersService } from '../../services/users-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  constructor(
    private user: UsersService,
    private router: Router,
  ) {}

  usersData = signal<User[] | undefined>(undefined);

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.user.getUsers().subscribe((data) => {
      this.usersData.set(data);
    });
  }

  deleteUser(id: number | undefined) {
    if (id) {
      this.user.deleteUser(id).subscribe((res) => {
        this.fetchUsers();
      });
    }
  }

  editUser(id: number | undefined) {
    console.log(id);
    if (id) {
      this.router.navigate(['edit-user', id]);
    }
  }
}
