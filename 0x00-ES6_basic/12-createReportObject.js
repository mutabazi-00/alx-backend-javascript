export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList }, // Use spread syntax to create a copy of employeesList
    getNumberOfDepartments() {
      return Object.keys(employeesList).length; // Return the number of keys in employeesList
    },
  };
}
