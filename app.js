/*const http = require('http');*/
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');  // Import the admin.js file
const shopRoutes = require('./routes/shop');  // Import the shop.js file

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

/*app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // Allows the request to continue to the next middleware in line
});*/

app.use('/admin', adminRoutes);  // Use the admin.js file
app.use(shopRoutes);  // Use the shop.js file

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
});

/*const server = http.createServer(app);
server.listen(3000);*/
app.listen(3000);