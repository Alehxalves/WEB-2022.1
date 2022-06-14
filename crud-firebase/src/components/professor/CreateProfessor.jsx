import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FirebaseContext from "../../utils/FirebaseContext";
import FirebaseProfessorService from "../../services/FirebaseProfessorService";
import RestrictPage from "../../utils/RestrictPage";

const CreateProfessorPage = () => (
  <FirebaseContext.Consumer>
    {(firebase) => {
      return (
        <RestrictPage isLogged={firebase.getUser() != null}>
          <CreateProfessor firebase={firebase} />
        </RestrictPage>
      );
    }}
  </FirebaseContext.Consumer>
);

const CreateProfessor = (props) => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProfessor = { name, university, degree };

    FirebaseProfessorService.create(
      props.firebase.getFirestoreDb(),
      () => {
        alert(`Professor ${name} successfully created.`);
        navigate("/listProfessor");
      },
      newProfessor
    );
  };

  return (
    <div>
      <h2>Create Professor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name == null || name === undefined ? "" : name}
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>University</label>
          <input
            type="text"
            className="form-control"
            value={university ?? ""}
            name="university"
            onChange={(event) => setUniversity(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Degree</label>
          <input
            type="text"
            className="form-control"
            value={degree ?? ""}
            name="degree"
            onChange={(event) => setDegree(event.target.value)}
          />
        </div>
        <div className="form-group" style={{ paddingTop: 10 }}>
          <input
            type="submit"
            value="Create Professor"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateProfessorPage;
