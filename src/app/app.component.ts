import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { TodoItem } from './todo-item';
import { TodoList } from './todo-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private list = new TodoList('Blessed', [
    new TodoItem('Go for a run', true),
    new TodoItem('Watch a movies'),
    new TodoItem('Read a book'),
  ]);

  @ViewChild(MatTable) table: MatTable<TodoItem> | undefined;
  displayedColumns: string[] = ['id', 'description', 'action'];

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter((item) => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items;
  }

  addItem(taskInput: HTMLInputElement) {
    let newTask = taskInput.value;
    if (newTask != '') {
      this.list.addItem(newTask);
      taskInput.value = '';
      this.table?.renderRows();
    }

    return false;
  }
}
