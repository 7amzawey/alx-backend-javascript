const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1);
        const fields = {};
        students.forEach((student) => {
          const [firstName, , , field] = student.split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        });
        let result = `Number of students: ${students.length}\n`;
        for (const [field, fNames] of Object.entries(fields)) {
          result += `Number of students in ${field}: ${fNames.length}. List: ${fNames.join(', ')}\n`;
        }
        resolve(result.trim());
      }
    });
  });
}

module.exports = countStudents;
