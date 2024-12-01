const express = require('express')
const countStudents = require('./3-read_file_async')
const app = express('The server is running mate');
const PORT = 1245;
app.get('/', (req, res) => {
  res.send('Hello Holberton School!')
});
app.get('/students', (req, res) => {
  database = process.argv[2]
  res.send(countStudents(database))
})
app.listen(PORT, () => {
  console.log('Server is starting mate')
})
module.exports = app;
