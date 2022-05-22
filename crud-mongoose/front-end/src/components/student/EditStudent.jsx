import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditStudent = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0);
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    axios.get('http://localhost:3002/students/retrieve/' + params.id)
      .then(res => {
        setName(res.data.name);
        setCourse(res.data.course);
        setIra(res.data.ira);
      })
      .catch(error => console.log(error));
  }, [params.id]);

  const handleSubmit = (event) => {
    event.preventDefault()
    const updatedStudent =
    {
      name, course, ira
    }
    axios.put('http://localhost:3002/students/update/' + params.id, updatedStudent)
      .then(
        res => {
          alert(`Aluno(a) ${name} editado com sucesso.`);
          navigate("/listStudent")
        }
      )
      .catch(error => console.log(error))
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
