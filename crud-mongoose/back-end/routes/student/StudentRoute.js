var express = require('express');
var router = express.Router();

const StudentService = require('../../services/student/StudentService');

router.post('/register', function (req, res, next) {
    StudentService.register(req, res);
});

router.get('/list', (req, res, next) => {
    StudentService.list(req, res);
})

router.put('/update/:id', (req, res, next) => {
    StudentService.update(req, res);
})

router.delete('/delete/:id', (req, res, next) => {
    StudentService.delete(req, res);
})

router.get('/retrieve/:id', (req, res, next) => {
    StudentService.retrieve(req, res);
})

module.exports = router;
