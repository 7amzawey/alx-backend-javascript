export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (let value of array) {
    let newValue = appendString + value;
    array[i] = newValue;
    i++;
  }

  return array;
}
