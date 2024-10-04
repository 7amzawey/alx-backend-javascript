export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  const iterator = reportWithIterator[Symbol.iterator]();
  let result = iterator.next();

  while (!result.done) {
    str += `${result.value}`;
    result = iterator.next();
    if (!result.done) {
      str += ' | ';
    }
  }
  return str;
}
