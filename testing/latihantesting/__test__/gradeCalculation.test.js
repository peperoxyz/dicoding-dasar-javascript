/**
 * Apa yang akan diuji?
Fungsi menghitung rata-rata.
Fungsi untuk mengecek apakah seorang siswa lulus ujian.
Ekspektasi yang diharapkan?
Menghasilkan nilai yang sesuai dari inputan.
Inputan harus berupa angka.
Menghasilkan hasil kelulusan iya/tidak pada siswa dengan nilai kriteria tertentu.
 */

const { averageExams, isStudentPassExam } = require("../gradeCalculation");

/* unit test

// testing for function averageExams to return the exact average
test("it should return exact average", () => {
  const listValueOfExams = [80, 100, 100, 80];
  expect(averageExams(listValueOfExams)).toEqual(90);
});

// testing for the type of the data to be number only
test("it should only accept number and handle non-number value", () => {
  const listValueOfExams = [80, "a", "100", 80];
  expect(() => averageExams(listValueOfExams).toThrow());
});

*/

// integration test

describe("grade calculation", () => {
  test("it should return exact average", () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(averageExams(listValueOfExams)).toEqual(90);
  });

  test("it should return exam passed status", () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(true);
  });

  test("it should return exam failed status", () => {
    const listValueOfExams = [50, 40, 60, 80];
    expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(false);
  });
});
