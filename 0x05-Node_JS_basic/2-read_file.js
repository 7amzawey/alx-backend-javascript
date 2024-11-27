const fs = require('fs')

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1)
    console.log(`Number of students: ${students.length}`)
    const fields = {}
    students.forEach(students => {
      const [firstName, , , field] = students.split(',');
      if (!fields[field]) {
        fields[field] = []
      }
      fields[field].push(firstName);
    });
    for (const [field, fNames] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${fNames.length}. List: ${fNames.join(', ')}`)
    }
  } catch(err) {
    throw new Error('Cannot load the database')
  }
}

module.exports = countStudents
