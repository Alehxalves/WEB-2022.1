import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProfessorTableRow from "./ProfessorTableRow";

import FirebaseContext from "../../utils/FirebaseContext";
import FirebaseProfessorService from "../../services/FirebaseProfessorService";
import RestrictPage from "../../utils/RestrictPage";

const ListProfessorPage = () => (
  <FirebaseContext.Consumer>
    {(firebase) => {
      return (
        <RestrictPage isLogged={firebase.getUser() != null}>
          <ListProfessor firebase={firebase} />
        </RestrictPage>
      );
    }}
  </FirebaseContext.Consumer>
);

const ListProfessor = (props) => {
  const [professors, setProfessors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    FirebaseProfessorService.list_onSnapshot(
      props.firebase.getFirestoreDb(),
      (professors) => {
        setLoading(false);
        setProfessors(professors);
      }
    );
  }, [props.firebase]);

  function deleteProfessorById(_id) {
    let professorsTemp = professors;
    for (let i = 0; i < professors.length; i++) {
      if (professorsTemp[i]._id === _id) {
        professorsTemp.splice(i, 1);
      }
    }
    setProfessors([...professorsTemp]);
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
      if (!professors) return;
      return professors.map((professor, i) => {
        return (
          <ProfessorTableRow
            professor={professor}
            key={i}
            deleteProfessorById={deleteProfessorById}
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
            <th>Degree</th>
            <th>University</th>
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
        <h2>List Professors</h2>
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

export default ListProfessorPage;
