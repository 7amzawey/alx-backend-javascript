export default function hasValuesFromArray(set, array) {
  const checkEveryElement = array.every(Element => set.has(Element));
  return checkEveryElement;
}
