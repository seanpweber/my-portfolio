console.log("server started");

const express = require('express');
const app = express();
const serv = require('http').Server(app);
const port = process.env.PORT || 8080;

app.get('/',function(req, res) {//listens for when the client opens the site.
    res.sendFile(__dirname + '/client/public/index.html');
});
app.use('/client',express.static(__dirname + '/client'));//listens for when the client wants files.
serv.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});