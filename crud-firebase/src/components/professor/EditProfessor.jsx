import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import FirebaseContext from "../../utils/FirebaseContext";
import FirebaseProfessorService from "../../services/FirebaseProfessorService";
import RestrictPage from "../../utils/RestrictPage";

const EditProfessorPage = () => (
  <FirebaseContext.Consumer>
    {(firebase) => {
      return (
        <RestrictPage isLogged={firebase.getUser() != null}>
          <EditProfessor firebase={firebase} />
        </RestrictPage>
      );
    }}
  </FirebaseContext.Consumer>
);

const EditProfessor = (props) => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState(0);
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    FirebaseProfessorService.retrieve(
      props.firebase.getFirestoreDb(),
      (professor) => {
        setName(professor.name);
        setDegree(professor.degree);
        setUniversity(professor.university);
      },
      params.id
    );
  }, [params.id, props.firebase]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedProfessor = {
      name,
      university,
      degree,
    };

    FirebaseProfessorService.update(
      props.firebase.getFirestoreDb(),
      () => {
        navigate("/listProfessor");
      },
      params.id,
      updatedProfessor
    );
  };

  return (
    <div>
      <h2>Edit Professor</h2>
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
            value={degree ?? 0}
            name="degree"
            onChange={(event) => setDegree(event.target.value)}
          />
        </div>
        <div className="form-group" style={{ paddingTop: 10 }}>
          <input
            type="submit"
            value="Edit Professor"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfessorPage;
