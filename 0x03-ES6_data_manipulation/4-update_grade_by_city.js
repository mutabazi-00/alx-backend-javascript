const updateStudentGradeByCity = (students, city, newGrades) => students
  .filter((student) => student.location === city)
  .map((student) => {
    // Find the corresponding grade for each student
    const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeInfo ? gradeInfo.grade : 'N/A', // Set grade or 'N/A'
    };
  });

export default updateStudentGradeByCity;
