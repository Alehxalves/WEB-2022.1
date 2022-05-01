import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { students } from "./data.js";

const EditStudent = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0);

  const params = useParams();

  useEffect(() => {
    const student = students[params.id];
    setName(student.name);
    setCourse(student.course);
    setIra(student.ira);
  },[params.id]);

  const handleSubmit = (event) => {
    alert(`Name: ${name} \nCourse: ${course}\nIRA: ${ira}`);
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

export default EditStudent;
