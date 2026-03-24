import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users-service';
import { User } from '../../services/userDataType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
  constructor(
    private userService: UsersService,
    private router: Router,
  ) {}
  name = new FormControl('');
  email = new FormControl('');
  age = new FormControl('');

  submit() {
    let name = this.name.value;
    let email = this.email.value;
    let age = this.age.value;

    if (name && age && email) {
      let data: User = {
        name: name,
        age: Number(age),
        email: email,
      };

      this.userService.saveUser(data).subscribe((res) => {
        if (res.id) {
          this.router.navigate(['']);
        }
      });
    }
  }
}
