export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const department in report.allEmployees) {
    for (const employee of report.allEmployees[department]) {
      allEmployees.push(employee);
    }
  }
	return allEmployees[Symbol.iterator]();
}
