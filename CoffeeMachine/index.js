// Common JS style:
// const { coffeeStock, isCoffeMachineReady } = require("./state");

// ES6 Style:
import { coffeeStock, isCoffeMachineReady } from './state.js';

const makeCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams && isCoffeMachineReady) {
    console.log(`Your ${coffeeStock[type]} miligrams of ${type} is ready!`);
  } else if (!isCoffeMachineReady) {
    console.log("Sorry our coffee machine is not ready yet.")
  } else {
    console.log("Sorry, we're running out of coffee.");
  }
};

makeCoffee("arabica", 170);

// ================== //
 
const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}
 
displayStock(coffeeStock);
