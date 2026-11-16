"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
export default function WorkingWithRemoteObjectsAsynchronously() {
  const [assignment, setAssignment] = useState({} as { title: string; description: string; due: string; completed: boolean });
  const fetchAssignment = async () => {
    setAssignment(await client.fetchAssignment());
  };
  const updateTitle = async () => {
    setAssignment(await client.updateTitle(assignment.title));
  };
  useEffect(() => { fetchAssignment(); }, []);
  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <input value={assignment.title ?? ""}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      <textarea rows={3} value={assignment.description ?? ""}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
      <input type="date" value={assignment.due ?? ""}
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} />
      <label>
        <input type="checkbox" checked={assignment.completed ?? false}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
        Completed
      </label>
      <button type="button" onClick={updateTitle}>Update Title</button>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
    </div>
  );
}