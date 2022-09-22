// try and catch with no errors
try {
  console.log("Try first block of code");
} catch (error) {
  console.log("This block of code will be ignored since there are no errors occured");
}

console.log("========================================");

// try and catch with error
try {
  console.log("Try first block of code");
  errorCode;
  console.log("Try seconde block of code");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

/* parameter "error" in the 13th line is an object typed variable that have some main properties in it:

name: The name of the error
message: Message of the error details
stack: Information about the error sequence and which one is causing the error
*/
