const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('build'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(8000, function () {
    console.log('Server started on port 8000')
});

