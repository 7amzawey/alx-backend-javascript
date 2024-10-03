import { listOfStudents } from "./9-hoisting.js"; // Use named import

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted);

