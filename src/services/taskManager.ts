import { Task } from "../models/task.js";

export class TaskManager {
  private tasks: Task[] = [];

  private findTaskByIndex = (index: number): number => {
    return this.tasks.findIndex((task) => task.id === index);
  };

  private findTaskById = (id: number): Task => {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new Error(`Task with the id ${id} not found.`);
    }
    return task;
  };

  private getNextId = (): number => {
    return this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1;
  };

  addTask(title: string): void {
    const id = this.getNextId();
    const newTask: Task = { id, title, completed: false };
    this.tasks.push(newTask);
    console.log(`Task added: ${title} (id: ${id})`);
  }

  deleteTask(index: number): void {
    const taskToDelete = this.findTaskByIndex(index);
    if (taskToDelete === -1) {
      throw new Error();
    }
    this.tasks.splice(taskToDelete, 1);
    console.log(`Task number: ${index} deleted successfully!`);
  }

  completeTask(id: number): void {
    const task = this.findTaskById(id);
    if (task.completed) {
      console.log(`Task with the id ${id} is already completed.`);
      return;
    }
    task.completed = true;
    console.log(`Task with the id ${id} marked as completed.`);
  }

  getTasks(): void {
    const completedTasks = this.tasks.filter((task) => task.completed);
    const incompleteTasks = this.tasks.filter((task) => !task.completed);

    console.log("Completed Tasks:");
    completedTasks.forEach((task) =>
      console.log(`${task.title} (id: ${task.id})`)
    );

    console.log("\nIncomplete Tasks:");
    incompleteTasks.forEach((task) =>
      console.log(`${task.title} (id: ${task.id})`)
    );
  }
}
