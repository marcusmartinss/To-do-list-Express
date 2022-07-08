const express =  require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Olá');
    res.send(); 
    // responde com o que foi enviado
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
    // responde com o status 200 e o json do body
})

module.exports = router;