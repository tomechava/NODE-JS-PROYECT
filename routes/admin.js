const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    //console.log('In another middleware!');
    //res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/'); // Redirects to the specified path
});

module.exports = router;