import React from "react";
import { Link } from "react-router-dom";

import FirebaseStudentService from "../../services/FirebaseStudentService";

const StudentTableRow = (props) => {
  const { _id, name, course, ira } = props.student;

  function deleteStudent() {
    if (window.confirm(`Do you want to delete Student: ${name}?`)) {
      FirebaseStudentService.delete(props.firestore, () => {}, _id);
    }
  }

  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{course}</td>
      <td>{ira}</td>
      <td style={{ textAlign: "center" }}>
        <Link to={`/editStudent/${_id}`} className="btn btn-primary">
          Edit
        </Link>
      </td>
      <td style={{ textAlign: "center" }}>
        <button className="btn btn-danger" onClick={() => deleteStudent()}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default StudentTableRow;
