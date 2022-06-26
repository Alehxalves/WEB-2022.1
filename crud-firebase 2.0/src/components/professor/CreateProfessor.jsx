import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FirebaseContext from "../../utils/FirebaseContext";
import FirebaseProfessorService from "../../services/FirebaseProfessorService";
import RestrictPage from "../../utils/RestrictPage";

const CreateProfessorPage = ({ setShowToast, setToast }) => (
  <FirebaseContext.Consumer>
    {(firebase) => {
      return (
        <RestrictPage isLogged={firebase.getUser() != null}>
          <CreateProfessor
            firebase={firebase}
            setShowToast={setShowToast}
            setToast={setToast}
          />
        </RestrictPage>
      );
    }}
  </FirebaseContext.Consumer>
);

const CreateProfessor = (props) => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [loading, setLoading] = useState(false);

  const [validate, setValidate] = useState({
    name: "",
    degree: "",
    university: "",
  });

  const navigate = useNavigate();

  const validateFields = () => {
    let res = true;
    setValidate({ name: "", degree: "", university: "" });

    if (name === "" || degree === "" || university === "") {
      props.setToast({
        header: "Error!",
        body: "Please complete all required fields.",
      });
      props.setShowToast(true);
      setLoading(false);
      res = false;
      let validateObj = { name: "", degree: "", ira: "" };
      if (name === "") validateObj.name = "is-invalid";
      if (degree === "") validateObj.degree = "is-invalid";
      if (university === "") validateObj.university = "is-invalid";
      setValidate(validateObj);
    }

    return res;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    if (!validateFields()) return;

    const newProfessor = { name, university, degree };

    FirebaseProfessorService.create(
      props.firebase.getFirestoreDb(),
      () => {
        props.setToast({
          header: "Success!",
          body: `Professor ${name} created successfully.`,
        });
        props.setShowToast(true);
        navigate("/listProfessor");
      },
      newProfessor
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
            value="Create Professor"
            className="btn btn-primary"
          />
        </div>
      </>
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
            className={`form-control ${validate.name}`}
            value={name == null || name === undefined ? "" : name}
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>University</label>
          <input
            type="text"
            className={`form-control ${validate.university}`}
            value={university ?? ""}
            name="university"
            onChange={(event) => setUniversity(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Degree</label>
          <input
            type="text"
            className={`form-control ${validate.degree}`}
            value={degree ?? ""}
            name="degree"
            onChange={(event) => setDegree(event.target.value)}
          />
        </div>
        {renderSubmitButton()}
      </form>
    </div>
  );
};

export default CreateProfessorPage;
