const getStudentsByLocation = (students, city) => {
  // Check if the argument is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use filter to extract students located in the specified city
  return students.filter((student) => student.location === city);
};

export default getStudentsByLocation;
