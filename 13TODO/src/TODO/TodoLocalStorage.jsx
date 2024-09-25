

const todoKey = "reactTodo";

export const getLocalStorageTodoData = () => {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return [];
  
    return JSON.parse(rawTodos);
  }

  
export const setLocalStorageTodoData = (task) => {
   // todo add data ot local storage
  return localStorage.setItem(todoKey, JSON.stringify(task));
  }