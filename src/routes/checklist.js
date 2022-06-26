const express = require('express');

const router = express.Router();

router.get('/checklists', (req, res) => {
    console.log('Olá mundo!');
    res.send();
})

module.exports = router;