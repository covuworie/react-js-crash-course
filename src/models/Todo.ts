export interface ITodoData {
  id: string;
  title: string;
  completed: boolean;
}

export interface ITodo extends ITodoData {
  toggleComplete(): void;
}

class Todo implements ITodo {
  public constructor(
    public readonly id: string,
    public readonly title: string,
    public completed: boolean
  ) {}

  public toggleComplete() {
    this.completed = !this.completed;
  }
}

export default Todo;
