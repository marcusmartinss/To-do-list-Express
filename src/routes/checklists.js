const express = require('express');

const router = express.Router();

const Checklist = require('../models/checklist');

router.get('/', (req, res) => {
    console.log('Olá');
    res.send(); 
    // responde com o que foi enviado
});

router.post('/', async (req, res) => {
    let { name } = req.body; // procure "name" dentro do body

    try {
        let checklist =  await Checklist.create({ name })
        res.status(200).json(checklist); // responde com o status 200 e o json de checklist
    } catch (error) {
        res.status(422).json(error)
    }
})

router.get('/:id', (req, res) => {
    // dois pontos indica que um parametro 'id' esta sendo esperado

    console.log(req.body);
    // automaticamente o express pega o que vem em :id e
    // preenche o objeto colocando em id

    res.send(`ID: ${req.params.id}`);
    // responde com o id
});

router.put('/:id', (req, res) => {
    console.log(req.body);
    res.send(`PUT ID: ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    console.log(req.body);
    res.send(`DELETE ID: ${req.params.id}`);
});

module.exports = router;