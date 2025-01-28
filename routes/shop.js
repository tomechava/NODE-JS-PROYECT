const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    //console.log('In a middleware!');
    //res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;