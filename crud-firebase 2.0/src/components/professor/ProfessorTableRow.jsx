import React from "react";
import { Link } from "react-router-dom";

import FirebaseProfessorService from "../../services/FirebaseProfessorService";

const ProfessorTableRow = (props) => {
  const { _id, name, university, degree } = props.professor;

  function deleteProfessor() {
    if (window.confirm(`Do you want to delete professor: ${name}?`)) {
      FirebaseProfessorService.delete(props.firestore, () => {}, _id);
    }
  }

  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{degree}</td>
      <td>{university}</td>
      <td>
        <Link to={`/editProfessor/${_id}`} className="btn btn-primary">
          Edit
        </Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteProfessor()}>
          Delete
        </button>
      </td>
    </tr>
  );
};
export default ProfessorTableRow;
