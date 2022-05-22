import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import ProfessorTableRow from "./ProfessorTableRow";

const ListProfessor = () => {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/professors/list")
      .then(res => setProfessors(res.data))
      .catch(error => console.log(error))
  }, [])

  function deleteProfessorById(_id) {
    let professorsTemp = professors;
    for (let i = 0; i < professors.length; i++) {
      if (professorsTemp[i]._id === _id) {
        professorsTemp.splice(i, 1)
      }
    }
    setProfessors([...professorsTemp]);
  }

  function generateTable() {
    if (!professors) return;
    return professors.map((professor, i) => {
      return <ProfessorTableRow professor={professor} key={i} deleteProfessorById={deleteProfessorById} />;
    });
  }

  return (
    <div>
      <h2>List Professors</h2>
      <table className="table table-striped">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>University</th>
          <th>Degree</th>
          <th colSpan="2"></th>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};

export default ListProfessor;
