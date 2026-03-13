import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
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

  // data = 10;
  // count = signal(100);

  // constructor() {
  //   effect(() => {
  //     console.log(`This is data: ${this.data}`);
  //     console.log(`This is data: ${this.count()}`);

  //     if (this.count() === 110) {
  //       this.count.set(100);
  //     }
  //   });
  // }

  // updateData() {
  //   this.data++;
  // }

  // updateSignal() {
  //   this.count.set(this.count() + 1);
  // }

  // height = 100;
  // width = 20;
  // area = this.height * this.width;

  // handleHeight() {
  //   this.height = this.height + 10;
  //   this.area = this.height * this.width;
  // }

  // height = signal(100);
  // width = signal(20);
  // area = computed(() => this.height() * this.width());
  // constructor() {
  //   effect(() => {
  //     console.log(`Area is: ${this.area()}`);
  //   });
  // }

  // handleHeight() {
  //   this.height.set(this.height() + 10);
  // }

  // constructor() {
  //   effect(() => {
  //     if (this.speed() > 0 && this.speed() < 80) this.color = 'green';
  //     if (this.speed() >= 80 && this.speed() < 120) this.color = 'orange';
  //     if (this.speed() >= 120) this.color = 'red';

  //     console.log(`Speed: ${this.speed()}`);
  //   });

  //   effect(() => {
  //     console.log(this.fruit());
  //   });
  // }

  // color = 'black';
  // fruit = signal('Apple');
  // speed = signal(0);

  // increaseSpeed() {
  //   this.speed.set(this.speed() + 10);
  // }

  // changeFruit() {
  //   this.fruit.set('Banana');
  // }

  // data: WritableSignal<string | number> = signal<string | number>('Muzammil');
  // speed: Signal<number> = computed<number>(() => 90);
  // users: WritableSignal<string[]> = signal(['Muzammil', 'Ibrahim', 'Imran']);

  // handleData() {
  //   // this.data.set('Muzammil');
  //   this.users.update((item) => [...item, 'Arshad']);
  //   console.log(this.users());
  // }

  name: WritableSignal<string> = signal('');

  resetValue() {
    this.name.set('Muzammil');
  }

  setValue(value: string) {
    this.name.set(value);
  }
}
