export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const department in report.allEmployees) {
    if (department) {
      for (const employee of report.allEmployees[department]) {
        allEmployees.push(employee);
      }
    }
  }
  return allEmployees[Symbol.iterator]();
}
