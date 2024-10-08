const cleanSet = (set, startString) => {
  // Return an empty string if startString is empty
  if (startString === '') return '';

  // Filter, map and join the set values
  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length)) // Append the rest of the string
    .join('-'); // Join with '-'
};

export default cleanSet;
