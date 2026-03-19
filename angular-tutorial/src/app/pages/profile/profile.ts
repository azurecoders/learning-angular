import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  constructor(public route: ActivatedRoute) {}
  name = signal('');
  id = signal('');
  age = signal('');

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.name.set(params['name']);
      this.age.set(params['age']);
      this.id.set(params['id']);
    });
  }
}
