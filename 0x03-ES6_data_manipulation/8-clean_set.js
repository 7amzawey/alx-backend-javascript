export default function cleanSet(set, startString) {
    if (typeof startString !== 'string' || !startString) {
      return '';
    }
  
    const res = Array.from(set)
      .filter((element) => element.startsWith(startString))
      .map((prefix) => prefix.slice(startString.length))
      .join('-');
    return res;
  }
  