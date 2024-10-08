const getStudentIdsSum = (students) => {
  // Check if the argument is an array
  if (!Array.isArray(students)) {
    return 0;
  }

  // Use reduce to calculate the sum of student ids
  return students.reduce((sum, student) => sum + student.id, 0);
};

export default getStudentIdsSum;
