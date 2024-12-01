const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const database = process.argv[2];
  try {
    const data = await countStudents(database);
    res.send(`This is the list of our students\n${data}`);
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(PORT, () => {
  console.log('Server is starting mate');
});

module.exports = app;
