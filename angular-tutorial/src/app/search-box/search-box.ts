import { Component } from '@angular/core';

@Component({
  selector: 'app-search-box',
  imports: [],
  template: `
    <div>
      <input type="text" name="" id="" placeholder="Search..." class="search-box" />
    </div>
  `,
  styles: `
    .search-box {
      width: 400px;
      padding: 10px 10px;
      font-size: 20px;
    }
  `,
})
export class SearchBox {}
