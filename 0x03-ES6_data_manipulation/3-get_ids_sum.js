export default function getStudentIdsSum (arr) {
  const sum = arr.reduce((acc, student) => acc + student.id, 0);
  return sum;
}
