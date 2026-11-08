import { useState } from "react";
import { useSampleTodosContext, type SampleTodo } from "./sampleTodosContext";

export default function SampleContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useSampleTodosContext();
  const [todo, setTodo] = useState<SampleTodo>({ id: "-1", title: "" });
  return (
    <div id="wd-context-sample-todo-list">
      <h3>Sample Context Todo List</h3>
      <input
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        placeholder="New todo"
        id="wd-context-sample-todo-title"
      />
      <button
        type="button"
        onClick={() => addTodo(todo)}
        id="wd-context-sample-add-todo-click"
      >
        Add
      </button>
      <button
        type="button"
        onClick={() => updateTodo(todo)}
        id="wd-context-sample-update-todo-click"
      >
        Update
      </button>
      <ul>
        {todos.map((t) => (
          <li key={t.id} id={`wd-context-sample-todo-${t.id}`}>
            {t.title}
            <button type="button" onClick={() => setTodo(t)}>
              Edit
            </button>
            <button type="button" onClick={() => deleteTodo(t.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
