export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = []; // Array to hold employee names

  // Iterate through the iterator
  for (const employee of reportWithIterator) {
    employeeNames.push(employee); // Add each employee name to the array
  }

  // Join the array into a string separated by '|'
  return employeeNames.join(' | ');
}
