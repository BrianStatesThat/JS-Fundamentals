const numberOfArguments = process.argv.length - 2; // Subtract 2 to exclude 'node' and the script name

if (numberOfArguments === 0) {
  console.log("No argument");
} else if (numberOfArguments === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}