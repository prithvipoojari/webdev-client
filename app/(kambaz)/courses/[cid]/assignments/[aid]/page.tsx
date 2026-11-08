"use client";
import Link from "next/link";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const existing = assignments.find((a) => a._id === aid);
  const [assignment, setAssignment] = useState<Assignment>(
    existing ?? { _id: "", title: "New Assignment", course: cid, description: "New Assignment Description", points: 100, due: "", available: "", until: "" },
  );

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
        Assignment Name
      </label>
      <input
        id="wd-name"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
      />
      <p className="mb-4 text-sm">Assignment id: {aid}</p>
      <label htmlFor="wd-description" className="mb-1 block text-sm font-medium">
        Description
      </label>
      <textarea
        id="wd-description"
        value={assignment.description}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        className="mb-4 h-32 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
      />

      <table className="w-full">
        <tbody>
          <tr>
            <td className="pe-4 pt-2 text-right align-top text-sm font-medium">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td className="pb-4">
              <input id="wd-points" value={assignment.points} onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })} className="w-full rounded border border-neutral-300 px-3 py-2 text-sm" />
            </td>
          </tr>
          <tr>
            <td className="pe-4 pt-2 text-right align-top text-sm font-medium">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td className="pb-4">
              <select id="wd-group" defaultValue="ASSIGNMENTS" className="w-full rounded border border-neutral-300 px-3 py-2 text-sm">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="pe-4 pt-2 text-right align-top text-sm font-medium">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td className="pb-4">
              <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className="w-full rounded border border-neutral-300 px-3 py-2 text-sm">
                <option value="PERCENTAGE">Percentage</option>
                <option value="POINTS">Points</option>
                <option value="LETTER">Letter Grade</option>
                <option value="COMPLETE">Complete/Incomplete</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="pe-4 pt-2 text-right align-top text-sm font-medium">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td className="pb-4">
              <select id="wd-submission-type" defaultValue="ONLINE" className="w-full rounded border border-neutral-300 px-3 py-2 text-sm">
                <option value="ONLINE">Online</option>
                <option value="PAPER">On Paper</option>
                <option value="NONE">No Submission</option>
              </select>
              <br />
              <br />
              <label>Online Entry Options</label>
              <br />
              <input type="checkbox" name="wd-entry-options" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input
                type="checkbox"
                name="wd-entry-options"
                id="wd-website-url"
                defaultChecked
              />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input
                type="checkbox"
                name="wd-entry-options"
                id="wd-media-recordings"
              />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input
                type="checkbox"
                name="wd-entry-options"
                id="wd-student-annotation"
              />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input type="checkbox" name="wd-entry-options" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td className="pe-4 pt-2 text-right align-top text-sm font-medium">
              Assign
            </td>
            <td className="pb-4">
              <label htmlFor="wd-assign-to" className="mb-1 block text-sm font-medium">Assign to</label>
              <input id="wd-assign-to" className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 text-sm" defaultValue="Everyone" />
              <label htmlFor="wd-due-date" className="mb-1 block text-sm font-medium">Due</label>
              <input type="date" id="wd-due-date" className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 text-sm" value={assignment.due} onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} />
              <table>
                <tbody>
                  <tr>
                    <td valign="top" className="pe-4">
                      <label htmlFor="wd-available-from" className="mb-1 block text-sm font-medium">Available from</label>
                      <input
                        className="rounded border border-neutral-300 px-3 py-2 text-sm"
                        type="date"
                        id="wd-available-from"
                        value={assignment.available}
                        onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}
                      />
                    </td>
                    <td valign="top">
                      <label htmlFor="wd-available-until" className="mb-1 block text-sm font-medium">Until</label>
                      <input type="date" id="wd-available-until" className="rounded border border-neutral-300 px-3 py-2 text-sm" value={assignment.until ?? ""} onChange={(e) => setAssignment({ ...assignment, until: e.target.value })} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <label htmlFor="wd-ai-editor-notes" className="mb-1 block text-sm font-medium">
        Sample notes
      </label>
      <textarea
        id="wd-ai-editor-notes"
        className="mb-4 h-32 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
      />
      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm"
        >
          Cancel
        </Link>
        <button
          type="button"
          onClick={() => {
            if (existing) {
              updateAssignment(assignment);
            } else {
              addAssignment(assignment);
            }
            router.push(`/courses/${cid}/assignments`);
          }}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
