const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      const students = lines.slice(1); // Skip the header line

      console.log(`Number of students: ${students.length}`);

      const fields = {};
      students.forEach(student => {
        const [firstName, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      });

      for (const [field, fNames] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${fNames.length}. List: ${fNames.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
