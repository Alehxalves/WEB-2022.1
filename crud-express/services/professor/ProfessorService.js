const ProfessorModel = require('../../models/professor/ProfessorModel');

let professors = [
    { _id: 1, name: "Jefersson", university: "UFC", degree: "Doutorado" },
    { _id: 2, name: "David Sena", university: "UFC", degree: "Doutorado" },
    { _id: 3, name: "Sicrano", university: "IFCE", degree: "Doutorado" }
];
let nextId = professors.length + 1;
let _id = nextId;

class ProfessorService {

    static list() {
        return professors;
    }

    static create(data) {
        let student = new ProfessorModel(
            _id++,
            data.name,
            data.university,
            data.degree
        )
        professors.push(student);
        return student;
    }

    static update(_id, data) {
        for (let s of professors) {
            if (s._id == _id) {
                s.name = data.name
                s.university = data.university
                s.degree = data.degree
                return s;
            }
        }
        return null;
    }

    static delete(_id) {
        for (let i = 0; i < professors.length; i++) {
            if (professors[i]._id == _id) {
                professors.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    static retrieve(_id) {
        for (let i = 0; i < professors.length; i++) {
            if (professors[i]._id == _id) {
                return professors[i];
            }
        }
        return {};
    }
}

module.exports = ProfessorService;