const fs = require('fs');

const reqHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/'){   //"===" means is only true if is a string and has that value
        res.setHeader('Content-Type', 'text/html');     //Define the type of content in the header as html
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST'){   //"===" means is only true if is a string and has that value
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
            //console.log(chunk);
        });       //Event listener
        return req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;  //Status code 302 stands for redirection
                res.setHeader('Location', '/');
                return res.end();   //only redirect once the file is done being written
            });   //"Sync" blocks code execution until this file is created
        })  //once all chunks have been loaded we have all the data
    }
    res.setHeader('Content-Type', 'text/html');     //Define the type of content in the header as html
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = reqHandler;
