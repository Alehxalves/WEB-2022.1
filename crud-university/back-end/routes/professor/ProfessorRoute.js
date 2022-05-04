var express = require('express');
var router = express.Router();

const ProfessorService = require('../../services/professor/ProfessorService');

router.get('/list', (req, res, next) => {
    return res.json(ProfessorService.list());
})

router.post('/create', function (req, res, next) {
    const professor = ProfessorService.create(req.body);
    return res.json(professor);
});

router.put('/update/:id', (req, res, next) => {
    const professor = ProfessorService.update(req.params.id, req.body);
    return res.json(professor);
})

router.delete('/delete/:id', (req, res, next) => {
    const professor = ProfessorService.delete(req.params.id);
    return res.json(professor);
})

router.get('/retrieve/:id', (req, res, next) => {
    const professor = ProfessorService.retrieve(req.params.id);
    return res.json(professor);
})

module.exports = router;
