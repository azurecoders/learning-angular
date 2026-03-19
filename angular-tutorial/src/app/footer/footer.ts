import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  // template: `<div><h3>Footer Custom Component</h3></div>`,
  templateUrl: './footer.html',
  // styles: 'h3{color: green}',
  styleUrl: './footer.css',
})
export class Footer {
  name = signal("Muzammil")
}
