import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  count = signal(0);
  decrement() {
    this.count.update((prev) => prev - 1);
  }
  increment() {
    this.count.update((prev) => prev + 1);
  }
  reset() {
    this.count.set(0);
  }
}
