import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FirebaseContext from "../../utils/FirebaseContext";
import FirebaseStudentService from "../../services/FirebaseStudentService";
import RestrictPage from "../../utils/RestrictPage";

const CreateStudentPage = () => (
  <FirebaseContext.Consumer>
    {(firebase) => {
      return (
        <RestrictPage isLogged={firebase.getUser() != null}>
          <CreateStudent firebase={firebase} />
        </RestrictPage>
      );
    }}
  </FirebaseContext.Consumer>
);

const CreateStudent = (props) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newStudent = { name, course, ira };

    FirebaseStudentService.create(
      props.firebase.getFirestoreDb(),
      () => {
        alert(`Student ${name} successfully created.`);
        navigate("/listStudent");
      },
      newStudent
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
          <label>Course</label>
          <input
            type="text"
            className="form-control"
            value={course ?? ""}
            name="course"
            onChange={(event) => setCourse(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>IRA</label>
          <input
            type="text"
            className="form-control"
            value={ira ?? 0}
            name="ira"
            onChange={(event) => setIra(event.target.value)}
          />
        </div>
        <div className="form-group" style={{ paddingTop: 10 }}>
          <input
            type="submit"
            value="Create Student"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateStudentPage;
