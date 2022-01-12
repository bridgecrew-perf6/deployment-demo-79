const express = require('express');
const { append } = require('express/lib/response');
const path = require('path');

const add = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.lot(`Listening on port ${port}`)
})