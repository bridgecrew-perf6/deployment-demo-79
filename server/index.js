const express = require('express');
const { append } = require('express/lib/response'); //this line was automatically added.
const path = require('path');

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.use(express.static('public')) //linking public folder

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})