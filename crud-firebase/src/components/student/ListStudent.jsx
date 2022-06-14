import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import StudentTableRow from "./StudentTableRow";

import FirebaseContext from "../../utils/FirebaseContext";
import FirebaseStudentService from "../../services/FirebaseStudentService";
import RestrictPage from "../../utils/RestrictPage";

const ListStudentPage = () => (
  <FirebaseContext.Consumer>
    {(firebase) => {
      return (
        <RestrictPage isLogged={firebase.getUser() != null}>
          <ListStudent firebase={firebase} />
        </RestrictPage>
      );
    }}
  </FirebaseContext.Consumer>
);

const ListStudent = (props) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    FirebaseStudentService.list_onSnapshot(
      props.firebase.getFirestoreDb(),
      (students) => {
        setLoading(false);
        setStudents(students);
      }
    );
  }, [props.firebase]);

  function deleteStudentById(_id) {
    let studentsTemp = students;
    for (let i = 0; i < students.length; i++) {
      if (studentsTemp[i]._id === _id) {
        studentsTemp.splice(i, 1);
      }
    }
    setStudents([...studentsTemp]);
  }

  function renderTable() {
    if (loading) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 100,
          }}
        >
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          />
          Loading...
        </div>
      );
    }

    function renderTableBody() {
      if (!students) return;
      return students.map((student, i) => {
        return (
          <StudentTableRow
            student={student}
            key={i}
            deleteStudentById={deleteStudentById}
            firestore={props.firebase.getFirestoreDb()}
          />
        );
      });
    }

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>IRA</th>
            <th colSpan={2} style={{ textAlign: "center" }}></th>
          </tr>
        </thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
    );
  }

  return (
    <>
      <main>
        <h2>List Students</h2>
        {renderTable()}
      </main>
      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </nav>
    </>
  );
};

export default ListStudentPage;
