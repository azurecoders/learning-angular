import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public route: Router) {}
  name = signal('Muzammil');

  goToProfile() {
    this.route.navigate(['profile']);
  }

  goToNadeemProfile() {
    this.route.navigate(['profile'], {
      queryParams: { id: 3, name: 'Nadeem', age: 30 },
    });
  }

  goToAbout() {
    this.route.navigate(['about', 'Nadeem', 35]);
  }
}
