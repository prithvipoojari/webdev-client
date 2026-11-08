"use client";

import { FaUserCircle } from "react-icons/fa";
import * as db from "../../../../database";
import { useState } from "react";
import { useParams } from "next/navigation";
import { emptyUser, type User } from "../../../../account/AccountContext";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";

export default function PeopleTable() {
  const { cid } = useParams<{ cid: string }>();
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const [users, setUsers] = useState<User[]>(db.users);
  const [user, setUser] = useState<User>(emptyUser);
  const addPerson = () => {
    const newUser = { ...user, _id: crypto.randomUUID() };
    setUsers([...users, newUser]);
    enroll(newUser._id, cid);
    setUser(emptyUser);
  };

  const enrolled = users.filter((usr) =>
    enrollments.some(
      (enrollment) => enrollment.user === usr._id && enrollment.course === cid,
    ),
  );
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <div className="mb-3 flex flex-wrap gap-2">
        <input
          id="wd-people-first-name"
          placeholder="First name"
          className="rounded border px-2 py-1"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <input
          id="wd-people-last-name"
          placeholder="Last name"
          className="rounded border px-2 py-1"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <select
          id="wd-people-role"
          className="rounded border px-2 py-1"
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        >
          <option value="STUDENT">Student</option>
          <option value="TA">Teaching Assistant</option>
          <option value="FACULTY">Faculty</option>
        </select>
        <button
          id="wd-people-add"
          type="button"
          onClick={addPerson}
          className="rounded bg-red-600 px-3 py-1 text-sm text-white"
        >
          Add
        </button>
      </div>

      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolled.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
