// contoh asynchronous: setTimeout()

// akan dijalankan pertama kali
console.log("Selamat datang!");

// akan dijalankan ketika sudah 3000 detik
setTimeout(() => {
    console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);

// akan dijalankan kedua
console.log("Ada yang bisa dibantu?");