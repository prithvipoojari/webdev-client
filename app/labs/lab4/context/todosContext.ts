import { createContext, createElement, useContext, useState, type ReactNode } from "react";

export type Todo = { id: string; title: string };

type TodosContextValue = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (todo: Todo) => setTodos((prev) => [...prev, todo]);
  const updateTodo = (todo: Todo) =>
    setTodos((prev) => prev.map((item) => (item.id === todo.id ? todo : item)));
  const deleteTodo = (id: string) =>
    setTodos((prev) => prev.filter((item) => item.id !== id));
  return createElement(
    TodosContext.Provider,
    { value: { todos, addTodo, updateTodo, deleteTodo } },
    children
  );
}

export function useTodosContext() {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodosContext must be used within a TodosProvider");
  }
  return context;
}
