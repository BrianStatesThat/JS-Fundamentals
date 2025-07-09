
const numOccurrencesStr = process.argv[2];

const numOccurrences = parseInt(numOccurrencesStr);

if (isNaN(numOccurrences) || numOccurrences <= 0) {
  console.log("Missing number of occurrences");
} else {
  let output = "";
  for (let i = 0; i < numOccurrences; i++) {
    output += "C is fun\n";
  }

  console.log(output);
}