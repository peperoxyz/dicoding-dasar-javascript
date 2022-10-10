// Making a cupcake
/**
 *  Stating the stock
 *  Checking the availability of the oven
 *  Checking the stock of the pastry and the butter
 *  Baking the croissant
 *  */

// Stating stocks
state = {
  stock: {
    pastry: 30,
    butter: 15,
  },
  isOvenUsed: false,
};

// Checking the availability of the oven for 1 sec
const checkAvailability = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!state.isOvenUsed) {
        resolve("Oven is ready to use.");
      } else {
        reject("Sorry. The oven is in use.");
      }
    });
  }, 1000);
};

// Checking the stock
const checkStock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state.stock.pastry >= 20 && state.stock.butter >= 15) {
        resolve("Pastry stock is enough to make croissant.");
      } else {
        reject("There's not enough stock to make croissant.");
      }
    }, 1500);
  });
};

// Baking the croissant
const bakeCroissant = () => {
  console.log("Baking your croissant...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here's your croissant!");
    }, 2000);
  });
};

const meltButter = () => {
  return new Promise((resolve, reject) => {
    console.log("Melting the butter...");
    setTimeout(() => {
      resolve("The butter is fully melted!");
    }, 2000);
  });
};

const rollPastry = () => {
  return new Promise((resolve, reject) => {
    console.log("Rolling the pastry to be in croissant shape...");
    setTimeout(() => {
      resolve("The croissant is already in shape.");
    }, 1000);
  });
};

const makingCroissantReguler = () => {
  checkAvailability()
    .then((value) => {
      console.log(value);
      return checkStock();
    })
    .then((value) => {
      console.log(value);
      return bakeCroissant();
    })
    .then((value) => {
      console.log(value);
      state.isOvenUsed = false;
    })
    .catch((rejectedReason) => {
      console.log(rejectedReason);
      state.isOvenUsed = false;
    });
};

// makingCroissantReguler();

// Implementation using async-await

async function makingCroissantAsyncAwait() {
  try {
    await checkAvailability();
    await checkStock();
    await Promise.all([meltButter(), rollPastry()]);
    const croissant = await bakeCroissant();
    console.log(croissant);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}
// makingCroissantReguler();
makingCroissantAsyncAwait();
