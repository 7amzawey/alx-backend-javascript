export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const res = Array.from(set)
    .filter((Element) => Element.startsWith(startString))
    .map((prefix) => prefix.slice(startString.length)).join('-');
  return res;
}
