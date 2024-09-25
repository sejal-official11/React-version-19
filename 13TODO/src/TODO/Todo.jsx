import "./Todo.css";
import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageTodoData , setLocalStorageTodoData} from "./TodoLocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    // to check the input field is empty or not
    if (!content) return;
    // to check if the data is already existing or not
    // if (task.includes(inputValue)) return;

    const ifTodoContentMatched = task.find(
      (currTask) => currTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  setLocalStorageTodoData(task);

  const handleDeleteTodo = (value) => {
    // filter method return true condition
    const updatedTask = task.filter((currTask) => currTask.content !== value);
    setTask(updatedTask);
  };
  // todo handleCheckedTodo functionality
  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === content) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTask(updatedTask);
  };

  // to handleClearAllTodo functionality

  const handleClearAllTodo = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>

        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((currTask) => {
            return (
              <TodoList
                key={currTask.id}
                data={currTask.content}
                checked={currTask.checked}
                onhandleDeleteTodo={handleDeleteTodo}
                onhandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
      <section className="clear-btn" onClick={handleClearAllTodo}>
        Clear All
      </section>
    </section>
  );
};
