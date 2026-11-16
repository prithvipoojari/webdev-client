"use client";

import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { emptyCourse, type Course } from "../store/coursesStore";
import { useAccountContext } from "../account/AccountContext";
import * as client from "../courses/client";
export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const { currentUser } = useAccountContext();
  useEffect(() => {
    if (!currentUser) return;
    client.findMyCourses().then(setCourses);
  }, [currentUser]);
  const reloadCourses = async () => {
    setCourses(await client.findMyCourses());
  };
  const onAddCourse = async () => {
    await client.createCourse(course);
    await reloadCourses();
  };
  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter((c) => c._id !== courseId));
    await reloadCourses();
  };
  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    setCourses(courses.map((c) => (c._id === course._id ? course : c)));
    await reloadCourses();
  };
    const [allCourses, setAllCourses] = useState<Course[]>([]);
  useEffect(() => {
    if (!showAllCourses) return;
    client.fetchAllCourses().then(setAllCourses);
  }, [showAllCourses]);
  const onEnroll = async (courseId: string) => {
    await client.enrollIntoCourse("current", courseId);
    await reloadCourses();
  };
  const onUnenroll = async (courseId: string) => {
    await client.unenrollFromCourse("current", courseId);
    await reloadCourses();
  };


  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <div className="flex gap-2">
          <button
            type="button"
            id="wd-my-enrollments-toggle"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => setShowAllCourses((show) => !show)}
          >
            Enrollments
          </button>
          <button
            type="button"
            id="wd-enrollments-toggle"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            Enrollments
          </button>
        </div>
      </div>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={onAddCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={onUpdateCourse}
        >
          Update
        </button>
      </h5>
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        id="wd-course-description"
      />
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-my-number"
      />
      <input
        type="date"
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {(showAllCourses ? allCourses : courses).map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={() => setCourse(c)}
            onDelete={() => onDeleteCourse(c._id)}
            enrolled={courses.some((m) => m._id === c._id)}
            onEnroll={() => onEnroll(c._id)}
            onUnenroll={() => onUnenroll(c._id)}
          />
        ))}
      </div>
    </div>
  );
}
