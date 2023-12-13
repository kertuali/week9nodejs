const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    //console.log(__dirname);
    response.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.send('hello kertu nice to meet');
});

app.listen(3000, () => {
    console.log('Server is running on Port 3000');
});