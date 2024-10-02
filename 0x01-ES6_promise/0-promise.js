export default function getResponseFromAPI() {
  let promise = new Promise((resolve, reject) => {
    resolve("Promise resloved");
  });
  return promise;
}
