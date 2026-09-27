export default function YourForm() {
    return(
        <div id="wd-your-form">
            <h2>Text Fields</h2>
            <label htmlFor="yf-first-name">First Name: </label>
                <input
                    type="text"
                    title="eg: Prithvi"
                    placeholder="Prithvi"
                    defaultValue="Prithvi"
                    id="yf-first-name" />
                <br />
            <label htmlFor="yf-last-name">Last Name: </label>
                <input
                    type="text"
                    title="eg: Poojari"
                    placeholder="Poojari"
                    defaultValue="Poojari"
                    id="yf-last-name" />
                <br />
            <label htmlFor="yf-password">Password: </label>
                <input
                    type="password"
                    title="Choose a password"
                    placeholder="password"
                    id="yf-password" />
                <br />
            <label htmlFor="yf-student-id">Student ID: </label>
                <input
                    type="text"
                    title="eg: 123456789"
                    placeholder="123456789"
                    id="yf-student-id" />
                <br />
            <h2>Text boxes</h2>
            <label htmlFor="yf-textarea">Biography:</label>
            <br />
            <textarea
                id="yf-textarea"
                cols={30}
                rows={10}
                defaultValue="I want to learn how to make web applications for different use cases."
            />
            <h2>Radio buttons</h2>
            <label>Class standing:</label>
                <br />
            <input type="radio" name="yf-radio-standing" id="yf-radio-freshman" />
                <label htmlFor="yf-radio-freshman">Freshman</label>
                <br />
            <input type="radio" name="yf-radio-standing" id="yf-radio-sophomore" />
                <label htmlFor="yf-radio-sophomore">Sophomore</label>
                <br />
            <input type="radio" name="yf-radio-standing" id="yf-radio-junior" />
                <label htmlFor="yf-radio-junior">Junior</label>
                <br />
            <input type="radio" name="yf-radio-standing" id="yf-radio-senior" />
                <label htmlFor="yf-radio-senior">Senior</label>
                <br />
            <input type="radio" name="yf-radio-standing" id="yf-radio-graduate" defaultChecked />
                <label htmlFor="yf-radio-graduate">Graduate</label>
                <br />
            <label>Enrollment status:</label>
                <br />
            <input type="radio" name="yf-radio-enrollment" id="yf-radio-full-time" defaultChecked />
                <label htmlFor="yf-radio-full-time">Full-time</label>
                <br />
            <input type="radio" name="yf-radio-enrollment" id="yf-radio-part-time" />
                <label htmlFor="yf-radio-part-time">Part-time</label>
                <br />
            <h2>Checkboxes</h2>
            <label>Interests:</label>
                <br />
            <input type="checkbox" name="yf-check-interests" id="yf-chkbox-typescript" defaultChecked />
                <label htmlFor="yf-chkbox-typescript">TypeScript</label>
                <br />
            <input type="checkbox" name="yf-check-interests" id="yf-chkbox-react" defaultChecked />
                <label htmlFor="yf-chkbox-react">React / Next.js</label>
                <br />
            <input type="checkbox" name="yf-check-interests" id="yf-chkbox-node" />
                <label htmlFor="yf-chkbox-node">Node.js / Express</label>
                <br />
            <input type="checkbox" name="yf-check-interests" id="yf-chkbox-software-engineer" defaultChecked />
                <label htmlFor="yf-chkbox-software-engineer">Career as a software engineer</label>
                <br />
            <h2>Dropdowns</h2>
            <label htmlFor="yf-select-major">Major: </label>
                <br />
            <select id="yf-select-major" defaultValue="CS">
                <option value="CS">Computer Science (MS)</option>
                <option value="DS">Data Science</option>
                <option value="IS">Information Systems</option>
                <option value="SES">Software Engineering Systems</option>
                <option value="CY">Cybersecurity</option>
            </select>
                <br />
            <label htmlFor="yf-select-topics">Topics to deepen this term: </label>
                <br />
            <select
                multiple
                id="yf-select-topics"
                defaultValue={["REACT", "MONGODB"]}
            >
                <option value="REACT">React</option>
                <option value="NODE">Node.js / Express</option>
                <option value="MONGODB">MongoDB</option>
                <option value="REST">REST APIs</option>
                <option value="AUTH">Authentication</option>
                <option value="DEPLOY">Deployment</option>
            </select>
                <br />
            <h2>Other field types</h2>
            <label htmlFor="yf-email">School email: </label>
                <input
                    type="email"
                    placeholder="you@northeastern.edu"
                    defaultValue="poojari.pri@northeastern.edu"
                    id="yf-email" />
                <br />
            <label htmlFor="yf-grad-year">Expected graduation year: </label>
                <input
                    type="number"
                    placeholder="2028"
                    defaultValue="2028"
                    min={2026}
                    max={2032}
                    id="yf-grad-year" />
                <br />
            <label htmlFor="yf-program-start">Program start date: </label>
                <input
                    type="date"
                    defaultValue="2026-01-07"
                    min="2020-01-01"
                    max="2027-12-31"
                    id="yf-program-start" />
                <br />
            <label htmlFor="yf-excitement">How excited am I about this course (0–10): </label>
                0
                <input
                    type="range"
                    defaultValue="10"
                    min="0"
                    max="10"
                    id="yf-excitement" />
                10
                <br />
            <h2>Buttons</h2>
            <button id="yf-button-save" type="submit">
                Save
            </button>
            <button id="yf-button-cancel" type="button">
                Cancel
            </button>
        </div>
    )
}
