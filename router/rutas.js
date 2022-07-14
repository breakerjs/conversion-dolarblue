// Llamado de Express y Router
const express = require('express');
const router = express.Router();

// Renderizar la pagina principal (home)
router.get('/', (req, res) => {
    res.render('index')
});
router.get('/euro', (req, res) => {
    res.render('eurobl')
});
router.get('/crypto', (req, res) => {
    res.render('crypto')
});

// Exportar el modulo: router
module.exports = router;