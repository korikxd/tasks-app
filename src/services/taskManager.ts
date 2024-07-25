import { Task } from "../models/task.js";

export class TaskManager {
  private tasks: Task[] = [];

  addTask(title: string): void {}

  deleteTask(id: number): void {}

  completeTask(id: number): void {}

  getTasks(): void {}
}
