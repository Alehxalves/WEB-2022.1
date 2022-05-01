var express = require('express');
var router = express.Router();

const StudentService = require('../../services/student/StudentService');

router.get('/list', (req, res, next) => {
    return res.json(StudentService.list());
})

router.post('/create', function (req, res, next) {
    const student = StudentService.create(req.body);
    return res.json(student);
});

router.put('/update/:id', (req, res, next) => {
    const student = StudentService.update(req.params.id, req.body);
    return res.json(student);
})

router.delete('/delete/:id', (req, res, next) => {
    const student = StudentService.delete(req.params.id);
    return res.json(student);
})

router.get('/retrieve/:id', (req, res, next) => {
    const student = StudentService.retrieve(req.params.id);
    return res.json(student);
})

module.exports = router;
