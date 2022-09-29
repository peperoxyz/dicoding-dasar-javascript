let coffee = "";
const orderCake = (coffee1, coffee2) => {
  coffee = "sbux.";
  console.log(coffee);
  setTimeout(() => {
    coffee2("luwak", "small");
    coffee1("point", "large");
    console.log(coffee);
  }, 3000);
};

orderCake(orderCake3, orderCake4);

function orderCake3(newCoffee, size) {
  coffee = newCoffee + " hello " + size;
}
function orderCake4(newCoffee, size) {
  coffee = newCoffee + " " + size;
}

// function orderCake2(callback) {
//   let cake = null;
//   console.log("Making a cake, please wait...");
//   setTimeout(() => {
//     callback(cake);
//   }, 3000);
// }

// function orderCake2(cake) {
//   cake = "Here is your cake!";
//   console.log(cake);
// }

// orderCake2(orderCake2);
