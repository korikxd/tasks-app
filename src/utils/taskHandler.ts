type TaskFunction = () => void;

//Method in charge to handle possible errors
export function handleTaskError(tasksFunction: TaskFunction): void {
  try {
    tasksFunction;
  } catch (error) {
    console.error(error.message);
  }
}
