import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor() {
    effect(() => {
      if (this.count() <= 0) {
        this.disabledDec.set(true);
      } else {
        this.disabledDec.set(false);
      }

      if (this.count() !== 0) {
        this.disabledReset.set(false);
      } else {
        this.disabledReset.set(true);
      }
    });
  }

  count = signal(0);
  disabledDec = signal(true);
  disabledReset = signal(true);

  updateCount(action: string) {
    if (action == 'inc') this.count.set(this.count() + 1);
    if (action == 'dec') this.count() > 0 && this.count.set(this.count() - 1);
    if (action == 'reset') this.count.set(0);
  }
}
