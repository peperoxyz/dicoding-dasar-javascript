// consuming promises

const stock = {
  coffeeBeans: 250,
  water: 1000,
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    if (stock.coffeeBeans >= 520 && stock.water >= 250) {
      resolve("Coffee stock is ready. We will make your order.");
    } else {
      reject("Not enough stock of coffee. We can not make your order.");
    }
  });
};

// callback function as a promise handler

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// call the function with .then

checkStock().then(handleSuccess).catch(handleFailure);
