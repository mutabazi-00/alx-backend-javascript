const getListStudentIds = (students) => {
  // Check if the argument is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use map to extract the ids from the array of student objects
  return students.map((student) => student.id);
};

export default getListStudentIds;
