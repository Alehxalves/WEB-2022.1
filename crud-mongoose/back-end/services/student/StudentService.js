const StudentModel = require('../../models/student/StudentModel');

class StudentService {

    static register(req, res) {
        StudentModel.create(req.body)
            .then(
                (student) => {
                    res.status(201).json(student);
                }
            )
            .catch(error => {
                res.status(500).json(error);
            });
    }

    static list(req, res) {
        StudentModel.find()
            .then(
                (students) => {
                    res.status(201).json(students);
                }
            )
            .catch(error => {
                res.status(500).json(error);
            });
    }

    static update(req, res) {
        StudentModel.findByIdAndUpdate(req.params.id, req.body, { 'new': true })
            .then(
                (student) => {
                    res.status(201).json(student);
                }
            )
            .catch(error => {
                res.status(500).json(error);
            });
    }

    static delete(req, res) {
        StudentModel.findByIdAndRemove(req.params.id)
            .then(
                (student) => {
                    res.status(201).json(student);
                }
            )
            .catch(error => {
                res.status(500).json(error);
            });
    }

    static retrieve(req, res) {
        StudentModel.findById(req.params.id)
            .then(
                (student) => {
                    res.status(201).json(student);
                }
            )
            .catch(error => {
                res.status(500).json(error);
            });
    }
}

module.exports = StudentService;