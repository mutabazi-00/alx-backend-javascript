export default function appendToEachArrayValue(array, appendString) {
  const newArray = []; // Create a new array to store results

  for (const value of array) {
    newArray.push(appendString + value); // Append modified value to the new array
  }

  return newArray; // Return the new array
}
