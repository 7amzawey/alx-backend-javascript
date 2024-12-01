const express = require('express');

const countStudents = require('./3-read_file_async');
const app = express('The server is running mate');
const PORT = 1245;
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  const database = process.argv[2];
  const data = await countStudents(database);
  res.send(`This is the list of our students\n${data}`);
});
app.listen(PORT, () => {
  console.log('Server is starting mate');
});
module.exports = app;
