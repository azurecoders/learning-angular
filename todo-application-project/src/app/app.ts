import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { provideIcons, NgIcon } from '@ng-icons/core';
import { lucideTrash2 } from '@ng-icons/lucide';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgIcon],
  templateUrl: './app.html',
  styleUrl: './app.css',
  viewProviders: [provideIcons({ lucideTrash2 })],
})
export class App {
  inputField = signal('');

  get todoField() {
    return this.inputField();
  }

  set todoField(val: string) {
    this.inputField.set(val);
  }

  todos = signal([
    {
      id: 1,
      text: 'Create a Todo Application',
      isCompleted: false,
    },
  ]);

  createTodo() {
    this.todos.update((prev) => [
      ...prev,
      { id: this.todos().length + 2, text: this.inputField(), isCompleted: false },
    ]);
    this.inputField.set('');
  }

  toggleCompletion(id: number) {
    let todo = this.todos().filter((todo) => todo.id === id);
    todo[0].isCompleted = !todo[0].isCompleted;
  }

  deleteTodo(id: number) {
    let todos = this.todos().filter((todo) => todo.id !== id);
    this.todos.set(todos);
  }
}
