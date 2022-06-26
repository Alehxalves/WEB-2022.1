import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import FirebaseContext from "../../utils/FirebaseContext";
import FirebaseStudentService from "../../services/FirebaseStudentService";
import RestrictPage from "../../utils/RestrictPage";

const EditStudentPage = ({ setShowToast, setToast }) => (
  <FirebaseContext.Consumer>
    {(firebase) => {
      return (
        <RestrictPage isLogged={firebase.getUser() != null}>
          <EditStudent
            firebase={firebase}
            setShowToast={setShowToast}
            setToast={setToast}
          />
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

  const [validate, setValidate] = useState({ name: "", course: "", ira: "" });
  const [loading, setLoading] = useState(false);

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

  const validateFields = () => {
    let res = true;
    setValidate({ name: "", course: "", ira: "" });

    if (name === "" || course === "" || ira === "") {
      props.setToast({
        header: "Error!",
        body: "Please complete all required fields.",
      });
      props.setShowToast(true);
      setLoading(false);
      res = false;
      let validateObj = { name: "", course: "", ira: "" };
      if (name === "") validateObj.name = "is-invalid";
      if (course === "") validateObj.course = "is-invalid";
      if (ira === "") validateObj.ira = "is-invalid";
      setValidate(validateObj);
    }

    if (ira !== "" && (ira < 0 || ira > 10)) {
      props.setToast({
        header: "Error!",
        body: "The IRA must be a value between 0 and 10!",
      });
      props.setShowToast(true);
      setLoading(false);
      res = false;
      let validateObj = { name: "", course: "", ira: "" };
      validateObj.ira = "is-invalid";
      setValidate(validateObj);
    }

    return res;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    if (!validateFields()) return;

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

  const renderSubmitButton = () => {
    if (loading) {
      return (
        <div style={{ paddingTop: 20 }}>
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span style={{ marginLeft: 10 }}>Loading...</span>
          </button>
        </div>
      );
    }
    return (
      <>
        <div className="form-group" style={{ paddingTop: 20 }}>
          <input
            type="submit"
            value="Edit Student"
            className="btn btn-primary"
          />
        </div>
      </>
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
            className={`form-control ${validate.name}`}
            value={name == null || name === undefined ? "" : name}
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Course</label>
          <input
            type="text"
            className={`form-control ${validate.course}`}
            value={course ?? ""}
            name="course"
            onChange={(event) => setCourse(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>IRA</label>
          <input
            type="text"
            className={`form-control ${validate.ira}`}
            value={ira ?? 0}
            name="ira"
            onChange={(event) => setIra(event.target.value)}
          />
        </div>
        {renderSubmitButton()}
      </form>
    </div>
  );
};

export default EditStudentPage;
