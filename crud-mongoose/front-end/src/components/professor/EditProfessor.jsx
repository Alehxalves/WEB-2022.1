import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProfessor = () => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState(0);
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    axios.get('http://localhost:3002/professors/retrieve/' + params.id)
      .then(res => {
        setName(res.data.name);
        setUniversity(res.data.university);
        setDegree(res.data.degree);
      })
      .catch(error => console.log(error));
  }, [params.id]);

  const handleSubmit = (event) => {
    event.preventDefault()
    const updatedProfessor =
    {
      name, university, degree
    }
    axios.put('http://localhost:3002/professors/update/' + params.id, updatedProfessor)
      .then(
        res => {
          alert(`Professor(a) ${name} editado com sucesso.`);
          navigate("/listProfessor")
        }
      )
      .catch(error => console.log(error))
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

export default EditProfessor;
