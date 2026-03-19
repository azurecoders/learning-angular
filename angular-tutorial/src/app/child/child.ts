import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() userName: string | undefined;
  @Output() setSelectedUser = new EventEmitter();
  @Output() deleteSelectedUser = new EventEmitter();

  whichUser(name: string | undefined) {
    this.setSelectedUser.emit(name);
  }

  deleteUser(name: string | undefined) {
    this.deleteSelectedUser.emit(name);
  }
}
