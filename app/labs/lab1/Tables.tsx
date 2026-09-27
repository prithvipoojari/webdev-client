export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="left">Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td align="left">Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td align="left">Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td align="left">Q4</td>
            <td align="center">React</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td align="left">Q5</td>
            <td align="center">Redux</td>
            <td align="center">3/3/21</td>
            <td align="right">82</td>
          </tr>
          <tr>
            <td align="left">Q6</td>
            <td align="center">Node.js</td>
            <td align="center">3/10/21</td>
            <td align="right">91</td>
          </tr>
          <tr>
            <td align="left">Q7</td>
            <td align="center">Express</td>
            <td align="center">3/17/21</td>
            <td align="right">78</td>
          </tr>
          <tr>
            <td align="left">Q8</td>
            <td align="center">REST APIs</td>
            <td align="center">3/24/21</td>
            <td align="right">87</td>
          </tr>
          <tr>
            <td align="left">Q9</td>
            <td align="center">MongoDB</td>
            <td align="center">3/31/21</td>
            <td align="right">93</td>
          </tr>
          <tr>
            <td align="left">Q10</td>
            <td align="center">Mongoose</td>
            <td align="center">4/7/21</td>
            <td align="right">91</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">88</td>
          </tr>
        </tfoot>
      </table>
      <h4>Fall 2026 Schedule</h4>
      <table id="wd-your-table" border={1} width="100%">
        <thead>
          <tr>
            <th align="center">Course Number</th>
            <th align="center">Course Name</th>
            <th align="center">Professor</th>
            <th align="center">Location</th>
            <th align="center">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">CS5600</td>
            <td align="center">Computer Systems</td>
            <td align="center">Xiang Ren</td>
            <td align="center">Shillman Hall, Room 320</td>
            <td align="center">Tue - 11:45am to 1:25pm, Thu - 2:50pm to 4:30pm </td>
          </tr>
          <tr>
            <td align="center">CS5610</td>
            <td align="center">Web Development</td>
            <td align="center">Jose Annunziato</td>
            <td align="center">Online</td>
            <td align="center">Tue - 6:00pm to 9:00pm</td>
          </tr>
          <tr>
            <td align="center">N/A</td>
            <td align="center">N/A</td>
            <td align="center">N/A</td>
            <td align="center">N/A</td>
            <td align="center">N/A</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}