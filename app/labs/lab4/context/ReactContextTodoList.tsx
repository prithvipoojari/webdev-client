import { useState } from "react";
import { useTodosContext, type Todo } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [todo, setTodo] = useState<Todo>({ id: "-1", title: "" });
  return (
    <div id="wd-context-todo-list">
      <h3>React Context Todo List</h3>
      <input
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        id="wd-context-todo-title"
      />
      <button type="button" onClick={() => addTodo({ ...todo, id: crypto.randomUUID() })} id="wd-context-add-todo-click">
        Add
      </button>
      <button type="button" onClick={() => updateTodo(todo)} id="wd-context-update-todo-click">
        Update
      </button>
      <ul>
        {todos.map((t) => (
          <li key={t.id} id={`wd-context-todo-${t.id}`}>
            {t.title}
            <button type="button" onClick={() => setTodo(t)}>Edit</button>
            <button type="button" onClick={() => deleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
