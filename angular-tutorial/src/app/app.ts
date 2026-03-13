import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile],
  templateUrl: './app.html',
  // template: `<h1>This is inline template {{ name }}</h1>`,
  styleUrl: './app.css',
})
export class App {
  // name = 'Muzammil';
  // email = 'xyz@gmail.com';
  // getName(a: number, b: number) {
  //   return `${this.name} ${a + b}`;
  // }
  // callMe() {
  //   alert('Hello Angular 21');
  // }
  // count = 0;
  // counter(action: string) {
  //   if (action === 'plus') this.count++;
  //   if (action === 'minus') this.count > 0 && this.count--;
  //   // this.showUserName();
  // }
  // showUserName() {
  //   alert('Hello');
  // }
  // handleEvent(eventName: string) {
  //   console.log(eventName);
  // }
  // data: string | number = 'Muzammil';
  // updateData(val: number) {
  //   this.data = val;
  //   this.data = this.sum(3, 4);
  // }
  // sum(a: number, b: number): number {
  //   return a + b;
  // }
  // handleEvent(event: PointerEvent | Event) {
  //   console.log(event);
  // }

  // btnDisable: boolean = false;
  // inputReadonly: boolean = false;

  // url =
  //   'https://images.unsplash.com/photo-1773176647951-d8f618dee942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8';

  // toggle() {
  //   this.btnDisable = !this.btnDisable;
  // }

  data = 10;
  count = signal(100);

  constructor() {
    effect(() => {
      console.log(`This is data: ${this.data}`);
      console.log(`This is data: ${this.count()}`);

      if (this.count() === 110) {
        this.count.set(100);
      }
    });
  }

  updateData() {
    this.data++;
  }

  updateSignal() {
    this.count.set(this.count() + 1);
  }
}
