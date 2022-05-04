import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfessorTableRow = (props) => {
  const { _id, name, university, degree } = props.professor;
  const navigate = useNavigate();

  function deleteProfessor() {
    if (window.confirm(`Deseja excluir o elemento de ID: ${_id}?`)) {
      axios.delete(`http://localhost:3002/crud/professors/delete/${_id}`)
        .then(response => {
          props.deleteProfessorById(_id)
          navigate("/listProfessor");
        })
        .catch(error => console.log(error))

    }
  }

  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{university}</td>
      <td>{degree}</td>
      <td>
        <Link to={`/editProfessor/${_id}`} className="btn btn-warning">
          Edit
        </Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteProfessor()}>Delete</button>
      </td>
    </tr>
  );
};
export default ProfessorTableRow;
