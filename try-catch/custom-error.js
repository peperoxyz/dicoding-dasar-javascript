class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

let json = '{"name": "Dea"}';

// ingin mengubah json string menjadi object
try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new ValidationError("'name' is required.");
  }

  if (!user.age) {
    throw new ValidationError("'age' is required.");
  }
  console.log(user);
  console.log(user.name);
  console.log(user.age);
} catch (error) {
  // 2 jenis error: SyntaxError dan RefferenceError
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ValidationError) {
    console.log(`Invalid data: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
