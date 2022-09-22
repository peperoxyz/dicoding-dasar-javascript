// Ketika terdapat JSON string yang tidak sesuai engan format object pada Javascript, akan ada error yang terjadi. Terutama ketika kita menggunakan fungsi JSON.parse yang akan melakukan parsing/konversi dari variabel json(String) menjadi sebuah object. Hal ini akan sering ditemui ketika melakukan request ke API. Bagaimana kita bisa menghadapinya?

let json = '{"name": "Dea", "age": 20}'

// ingin mengubah json string menjadi object
try {
    let user = JSON.parse(json);

    // add condition untuk throw error
    if(!user.name) {
        throw new SyntaxError("'name' is required.");
    }

    console.log(user.name);
    console.log(user.age)
} catch (error) {
    console.log(error.name);
    console.log(error.message)
}