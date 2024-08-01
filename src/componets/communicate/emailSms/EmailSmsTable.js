import React from "react";
import { TbCheckbox } from "react-icons/tb";

function EmailSmsTable() {
  return (
    <div style={{ margin: "20px 0", overflow: "auto" }}>
      <table className="table">
        <thead className="border-top">
          <tr>
            <td>Title </td>

            <th>Description</th>
            <th>Date </th>
            <th>Email </th>
            <th>SMS </th>
            <th>Group</th>
            <th>Individual</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>New Academic Session For Admission (2024-25)</td>
            <td>
              NEW ADMISSIONS FOR THE NEXT SESSION 2024-2025 ARE OPEN FROM
              CLASSES NURSERY TO CLASS- VIII FROM 1ST APRIL 2024.
            </td>
            <td>04/03/2024 01:57 pm</td>

            <td>
              <TbCheckbox />
            </td>
            <td>
              <TbCheckbox />
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>Holi Celebration Notice</td>
            <td>
              The colors and special Holi food items will be organized by the
              school itself. No student is allowed to bring his/her own eatables
              and any kind of Holi color. Students are only allowed to enter by
              showing their ID-Cards.
            </td>
            <td>03/04/2024 11:13 am</td>

            <td>
              <TbCheckbox />
            </td>
            <td>
              <TbCheckbox />
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>Pre Board Exam Schedule</td>
            <td>
              The preliminary exam conducted by your school is one of the ways
              to find out how well you are prepared for one of the significant
              exams of your life. Students have varying attitudes towards the
              pre-board exams
            </td>
            <td>02/02/2024 12:00 pm</td>

            <td>
              <TbCheckbox />
            </td>
            <td>
              <TbCheckbox />
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EmailSmsTable;
