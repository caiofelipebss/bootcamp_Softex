// CRUD PARA GERENCIAR ALUNOS EM UM SISTEMA

const express = require('express');
const router = express.Router();

// In-memory storage for the students
let students = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
];

// GET all students
router.get('/', (req, res) => {
  res.json(students);
});

// GET a specific student by id
router.get('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) res.status(404).send('Student not found');
  res.json(student);
});

// POST a new student
router.post('/', (req, res) => {
  const student = {
    id: students.length + 1,
    name: req.body.name,
    age: req.body.age
  };
  students.push(student);
  res.json(student);
});

// PUT update an existing student
router.put('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) res.status(404).send('Student not found');
  student.name = req.body.name;
  student.age = req.body.age;
  res.json(student);
});

// DELETE a student
router.delete('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) res.status(404).send('Student not found');
  const index = students.indexOf(student);
  students.splice(index, 1);
  res.json(student);
});

module.exports = router;



// Neste exemplo, as rotas estão sendo definidas usando o objeto router do Express.

// GET /: essa rota retorna uma lista de todos os alunos no sistema. Retorno: 200 (OK)
// GET /:id: essa rota retorna informações de um aluno específico, identificado pelo seu ID. Retorno: 200 (OK) ou 404 (Not Found)
// POST /: essa rota adiciona um novo aluno ao sistema. Retorno: 201 (Created)
// PUT /:id: essa rota atualiza as informações de um aluno existente, identificado pelo seu ID. Retorno: 200 (OK) ou 404 (Not Found)
// DELETE /:id: essa rota remove um aluno exist