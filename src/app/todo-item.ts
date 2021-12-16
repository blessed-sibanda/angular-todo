export class TodoItem {
  constructor(public task: string, public complete: boolean = false) {
    this.task = task;
    this.complete = complete;
  }
}
