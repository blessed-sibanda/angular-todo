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
  showComplete: boolean = false;

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
    if (this.showComplete) {
      return this.list.items.length;
    } else {
      return this.list.items.length - this.items.length;
    }
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter((item) =>
      this.showComplete ? true : item.complete
    );
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
