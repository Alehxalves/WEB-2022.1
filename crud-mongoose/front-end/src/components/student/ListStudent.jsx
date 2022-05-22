import axios from "axios";
import StudentTableRow from "./StudentTableRow";
import { useEffect, useState } from "react";

const ListStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/students/list")
      .then(res => setStudents(res.data))
      .catch(error => console.log(error))
  }, [])

  function deleteStudentById(_id) {
    let studentsTemp = students;
    for (let i = 0; i < students.length; i++) {
      if (studentsTemp[i]._id === _id) {
        studentsTemp.splice(i, 1)
      }
    }
    setStudents([...studentsTemp]);
  }

  function generateTable() {

    if (!students) return
    return students.map(
      (student, i) => {
        return <StudentTableRow student={student} key={i} deleteStudentById={deleteStudentById} />
      }
    )
  }

  return (
    <div>
      <h2>List Students</h2>
      <table className="table table-striped">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Course</th>
          <th>IRA</th>
          <th colSpan="2"></th>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};

export default ListStudent;
