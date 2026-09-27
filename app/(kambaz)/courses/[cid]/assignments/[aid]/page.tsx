import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: your full name and section, links to each of the lab assignments, a link to the Kambaz application, and links to all relevant source code repositories. The Kambaz application should include a link to navigate back to the landing page."
      />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                <option value="PERCENTAGE">Percentage</option>
                <option value="POINTS">Points</option>
                <option value="LETTER">Letter Grade</option>
                <option value="COMPLETE">Complete/Incomplete</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="ONLINE">
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
            <td align="right" valign="top">
              Assign
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label>
              <br />
              <input id="wd-assign-to" defaultValue="Everyone" />
              <br />
              <br />
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
              <br />
              <br />
              <table>
                <tbody>
                  <tr>
                    <td valign="top">
                      <label htmlFor="wd-available-from">Available from</label>
                      <br />
                      <input
                        type="date"
                        id="wd-available-from"
                        defaultValue="2024-05-06"
                      />
                    </td>
                    <td valign="top">
                      <label htmlFor="wd-available-until">Until</label>
                      <br />
                      <input type="date" id="wd-available-until" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <Link href={`/courses/${cid}/assignments`} id="wd-cancel">
        <button type="button">Cancel</button>
      </Link>{" "}
      <Link href={`/courses/${cid}/assignments`} id="wd-save">
        <button type="button">Save</button>
      </Link>
    </div>
  );
}
