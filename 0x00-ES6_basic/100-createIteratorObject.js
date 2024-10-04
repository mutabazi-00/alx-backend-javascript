export default function createIteratorObject(report) {
  // Extract all employees from all departments
  const employees = Object.values(report.allEmployees).flat();

  // Use a generator function to create an iterator
  function* employeeIterator() {
    for (const employee of employees) {
      yield employee; // Yield each employee
    }
  }

  return employeeIterator(); // Return the iterator
}
