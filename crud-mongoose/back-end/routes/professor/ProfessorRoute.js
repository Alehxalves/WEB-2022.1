var express = require('express');
var router = express.Router();

const ProfessorService = require('../../services/professor/ProfessorService');

router.post('/register', function (req, res, next) {
    ProfessorService.register(req, res);
});

router.get('/list', (req, res, next) => {
    ProfessorService.list(req, res);
})

router.put('/update/:id', (req, res, next) => {
    ProfessorService.update(req, res);
})

router.delete('/delete/:id', (req, res, next) => {
    ProfessorService.delete(req, res);
})

router.get('/retrieve/:id', (req, res, next) => {
    ProfessorService.retrieve(req, res);
})

module.exports = router;
