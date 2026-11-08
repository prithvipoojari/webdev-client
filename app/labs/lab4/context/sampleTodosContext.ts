import { createContext, createElement, useContext, useState, type ReactNode } from "react";

export type SampleTodo = { id: string; title: string };

type SampleTodosContextValue = {
  todos: SampleTodo[];
  addTodo: (todo: SampleTodo) => void;
  updateTodo: (todo: SampleTodo) => void;
  deleteTodo: (id: string) => void;
};

const SampleTodosContext = createContext<SampleTodosContextValue | null>(null);

export function SampleTodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<SampleTodo[]>([]);
  const addTodo = (todo: SampleTodo) =>
    setTodos([...todos, { ...todo, id: crypto.randomUUID() }]);
  const updateTodo = (todo: SampleTodo) =>
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  const deleteTodo = (id: string) => setTodos(todos.filter((t) => t.id !== id));
  return createElement(
    SampleTodosContext.Provider,
    { value: { todos, addTodo, updateTodo, deleteTodo } },
    children,
  );
}

export function useSampleTodosContext() {
  const value = useContext(SampleTodosContext);
  if (!value) {
    throw new Error("useSampleTodosContext must be used inside SampleTodosProvider");
  }
  return value;
}
