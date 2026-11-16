"use client";
import { useEffect, useState } from "react";
import { FaPencilAlt, FaPlusCircle, FaTrash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";
type Todo = { id: number; title: string; completed: boolean; editing?: boolean };
export default function WorkingWithRemoteArraysAsynchronously() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fetchTodos = async () => {
    setTodos(await client.fetchTodos());
  };
  const removeTodo = async (todo: Todo) => {
    setTodos(await client.removeTodo(todo));
  };
  const createNewTodo = async () => {
    setTodos(await client.createNewTodo());
  };
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = async (todo: Todo) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      setErrorMessage((error as { response: { data: { message: string } } }).response.data.message);
    }
  };
  const editTodo = (todo: Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)));
  };
  const updateTodo = async (todo: Todo) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error) {
      setErrorMessage((error as { response: { data: { message: string } } }).response.data.message);
    }
  };
  useEffect(() => { fetchTodos(); }, []);
  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <p id="wd-todo-error-message" className="rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      <h4>
        Todos
        <FaPlusCircle onClick={createNewTodo} id="wd-create-todo"
          className="cursor-pointer text-green-600" />
        <FaPlusCircle onClick={postNewTodo} id="wd-post-todo"
          className="cursor-pointer text-blue-600" />
      </h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed}
              onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })} />
            {!todo.editing && (
              <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
            )}
            {todo.editing && (
              <input value={todo.title}
                onChange={(e) => setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, title: e.target.value } : t)))}
                onKeyDown={(e) => { if (e.key === "Enter") { updateTodo({ ...todo, editing: false }); } }} />
            )}
            <FaPencilAlt onClick={() => editTodo(todo)} className="cursor-pointer text-blue-600" />
            <FaTrash onClick={() => removeTodo(todo)} id="wd-remove-todo"
              className="cursor-pointer text-red-600" />
            <TiDelete onClick={() => deleteTodo(todo)} id="wd-delete-todo"
              className="cursor-pointer text-2xl text-red-600" />
          </li>
        ))}
      </ul>
    </div>
  );
}
