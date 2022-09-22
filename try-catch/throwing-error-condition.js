// Ketika terdapat JSON string yang tidak sesuai engan format object pada Javascript, akan ada error yang terjadi. Terutama ketika kita menggunakan fungsi JSON.parse yang akan melakukan parsing/konversi dari variabel json(String) menjadi sebuah object. Hal ini akan sering ditemui ketika melakukan request ke API. Bagaimana kita bisa menghadapinya?

let json = '{"name": "Dea", "age": 20}';

// ingin mengubah json string menjadi object
try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }
  console.log(user);
  console.log(user.name);
  console.log(user.age);
} catch (error) {
  // 2 jenis error: SyntaxError dan RefferenceError
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
