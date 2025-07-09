const numOccurrencesStr = process.argv[2];
const numOccurrences = parseInt(numOccurrencesStr);

if (isNaN(numOccurrences) || numOccurrences <= 0) {
  console.log("Missing number of occurrences"); // First console.log
} else {
  let output = "";
  for (let i = 0; i < numOccurrences; i++) {
    output += "C is fun";
    // Add a newline ONLY if it's not the last iteration
    if (i < numOccurrences - 1) {
      output += "\n";
    }
  }
  console.log(output); // Second console.log
}