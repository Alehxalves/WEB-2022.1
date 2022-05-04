import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentTableRow = (props) => {
  const { id, name, course, ira } = props.student;
  const navigate = useNavigate();

  function deleteStudent() {
    if (window.confirm(`Deseja excluir o elemento de ID: ${id}?`)) {
      axios.delete(`http://localhost:3001/students/${id}`)
        .then(response => {
          props.deleteStudentById(id)
          navigate("/listStudent");
        })
        .catch(error => console.log(error))

    }
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{course}</td>
      <td>{ira}</td>
      <td>
        <Link to={`/editStudent/${id}`} className="btn btn-warning">
          Edit
        </Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteStudent()}>Delete</button>
      </td>
    </tr>
  );
};
export default StudentTableRow;
