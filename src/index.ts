import { TaskManager } from "./services/taskManager.js";
import { handleTaskError } from "./utils/taskHandler.js";

const taskManager = new TaskManager();

taskManager.addTask("First Task");
taskManager.addTask("Second Task");
taskManager.addTask("Third Task");
taskManager.completeTask(1);
taskManager.deleteTask(3);

handleTaskError(() => {
  //Possible error cause user tries to delete a Task that doesn't exists in the array
  taskManager.deleteTask(5);
});

taskManager.getTasks();
