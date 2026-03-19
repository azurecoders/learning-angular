import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(public route: ActivatedRoute) {}

  name = signal('');
  age = signal('');

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.name.set(params['name']);
      this.age.set(params['age']);
    });
  }
}
