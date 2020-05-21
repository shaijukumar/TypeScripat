//https://www.youtube.com/watch?v=DHvZLI7Db8E

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Success");
  }
});

p.then((message) => {
  console.log(message);
}).catch((message) => {
  console.log(message);
});
