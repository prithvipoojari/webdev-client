import Link from "next/link";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
        Assignment Name
      </label>
      <input
        id="wd-name"
        defaultValue="A1 - ENV + HTML"
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
      />
      <label htmlFor="wd-description" className="mb-1 block text-sm font-medium">
        Description
      </label>
      <textarea
        id="wd-description"
        defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
        className="mb-4 h-32 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
      />

      <table className="w-full">
        <tbody>
          <tr>
            <td className="pe-4 pt-2 text-right align-top text-sm font-medium">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td className="pb-4">
              <input id="wd-points" defaultValue={100} className="w-full rounded border border-neutral-300 px-3 py-2 text-sm" />
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
              <input type="date" id="wd-due-date" className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 text-sm" defaultValue="2024-05-13" />
              <table>
                <tbody>
                  <tr>
                    <td valign="top" className="pe-4">
                      <label htmlFor="wd-available-from" className="mb-1 block text-sm font-medium">Available from</label>
                      <input
                        className="rounded border border-neutral-300 px-3 py-2 text-sm"
                        type="date"
                        id="wd-available-from"
                        defaultValue="2024-05-06"
                      />
                    </td>
                    <td valign="top">
                      <label htmlFor="wd-available-until" className="mb-1 block text-sm font-medium">Until</label>
                      <input type="date" id="wd-available-until" className="rounded border border-neutral-300 px-3 py-2 text-sm" />
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
          href="/courses/1234/assignments"
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm"
        >
          Cancel
        </Link>
        <Link
          href="/courses/1234/assignments"
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm text-white"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
