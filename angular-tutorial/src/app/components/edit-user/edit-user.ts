import { Component } from '@angular/core';
import { UsersService } from '../../services/users-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../services/userDataType';

@Component({
  selector: 'app-edit-user',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.css',
})
export class EditUser {
  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  name = new FormControl('');
  email = new FormControl('');
  age = new FormControl('');

  ngOnInit() {
    let id = this?.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe((data: any) => {
      if (data) {
        this.name.setValue(data?.name);
        this.email.setValue(data?.email);
        this.age.setValue(data?.age.toString());
      }
    });
  }

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

      let id = this?.route.snapshot.paramMap.get('id');

      this.userService.updateUser(data, id).subscribe((res) => {
        if (res.id) {
          this.router.navigate(['']);
        }
      });
    }
  }
}
