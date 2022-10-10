const getCoffee = () => {
  return new Promise((resolve, reject) => {
    const seeds = 100;
    setTimeout(() => {
      if (seeds >= 440) {
        resolve("We got the coffee!");
      } else {
        reject("Running out of coffee seeds.");
      }
    }, 1000);
  });
};

/**
 * Await hanya akan mengembalikan nilai jika promis berhasil dilakukan (onFulfilled). Bagaimana jika promise gagal dilakukan (onRejected)? Maka kita akan membutuhkan bantuan try...catch.
 */

async function makeCoffee() {
  try {
    const coffee = await getCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

makeCoffee();
