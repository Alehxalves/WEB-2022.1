import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import FirebaseContext from "../../utils/FirebaseContext";
import FirebaseStudentService from "../../services/FirebaseStudentService";
import RestrictPage from "../../utils/RestrictPage";

const EditStudentPage = () => (
  <FirebaseContext.Consumer>
    {(firebase) => {
      return (
        <RestrictPage isLogged={firebase.getUser() != null}>
          <EditStudent firebase={firebase} />
        </RestrictPage>
      );
    }}
  </FirebaseContext.Consumer>
);

const EditStudent = (props) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0);
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    FirebaseStudentService.retrieve(
      props.firebase.getFirestoreDb(),
      (student) => {
        setName(student.name);
        setCourse(student.course);
        setIra(student.ira);
      },
      params.id
    );
  }, [params.id, props.firebase]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedStudent = {
      name,
      course,
      ira,
    };

    FirebaseStudentService.update(
      props.firebase.getFirestoreDb(),
      () => {
        navigate("/listStudent");
      },
      params.id,
      updatedStudent
    );
  };

  return (
    <div>
      <h2>Edit Student</h2>
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
            value="Edit Student"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditStudentPage;
