const cleanSet = (set, startString) => {
  // Return an empty string if startString is empty
  if (startString === '') return '';

  // Ensure the input is a Set
  if (!(set instanceof Set)) return '';

  // Filter, map, and join the set values
  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length)) // Get the rest of the string after startString
    .join('-'); // Join the results with '-'
};

export default cleanSet;
