//JavaScript Promises: https://www.youtube.com/watch?v=DHvZLI7Db8E
//JavaScript Async Await: https://www.youtube.com/watch?v=V_Kr9OSfDeU

//==========================================================
//Promise functions
//==========================================================
function Order(item) {
  return new Promise((resolve, reject) => {
    console.log(`Making order : ${item}`);
    if (item == "Coffee") {
      resolve(item);
    } else {
      reject("We serve only Coffee");
    }
  });
}

function Delivery(item) {
  return new Promise((resolve, reject) => {
    console.log(`Making  ${item}`);
    resolve(`${item} serverd`);
  });
}
//==========================================================
// Calling Promise functions
//==========================================================
function TakeOrder(item) {
  Order(item)
    .then((item) => {
      Delivery(item).then((message) => {
        console.log(message);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

//TakeOrder("Coffee");
//TakeOrder("Tea");

//==========================================================
// Calling Promise functions using async and await
//==========================================================
async function TakeOrderAsy(item) {
  // Async keyword to handle await
  try {
    const order = await Order(item); //await until function execution is finished
    console.log("Order received");
    const takeOrder = await Delivery(order);
    console.log(takeOrder);
  } catch (err) {
    console.log(err);
  }
}

//TakeOrderAsy("Coffee");
TakeOrderAsy("Tea");
//==========================================================
