const express = require('express');
const port = 1245;
const app = express("The sever is running on port 1245");

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
    console.log('sever is running on port 1245');
});

module.exports = app;
