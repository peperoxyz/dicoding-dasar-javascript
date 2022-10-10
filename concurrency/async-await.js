// async-await: memungkinkan kita menuliskan asynchronous process layaknya synchronous process dengan bantuan keyword async dan await.

// function yang mereturn object promise
const getCoffee = () => {
  return new Promise((resolve, reject) => {
    const seeds = 100;
    setTimeout(() => {
      if (seeds >= 40) {
        resolve("We got the coffee!");
      } else {
        reject("Running out of coffee seeds.");
      }
    }, 1000);
  });
};

/** CARA BIASA (ASYNCHRONOUS)

const makeCoffee = () => {
  getCoffee().then((coffee) => {
    console.log(coffee);
  });
};

makeCoffee();
*/

// CARA ASYNC-AWAIT
async function makeCoffee() {
  const coffee = await getCoffee();
  console.log(coffee);
}

makeCoffee();

/**
 * Keyword async digunakan untuk memberitahu JavaScript supaya menjalankan fungsi makeCoffee() secara asynchronous. Lalu, keyword await digunakan untuk menghentikan proses pembacaan kode selanjutnya sampai fungsi getCoffee() mengembalikan nilai promise resolve.

Walaupun await menghentikan proses pembacaan kode selanjutnya pada fungsi makeCoffee, tetapi ini tidak akan mengganggu proses runtime sesungguhnya pada JavaScript (global). Karena fungsi makeCoffee berjalan secara asynchronous, kita tidak dapat menggunakan await tanpa membuat function dalam scope-nya berjalan secara asynchronous.
 */
