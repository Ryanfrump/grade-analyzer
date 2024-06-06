const grades = [75, 88, 37, 100, 100, 89, 92, 93, 68, 76, 85, 90, 40, 99];

function gradeAnalyzer(grades) {
  let total = 0;
  let highest = grades[0];
  let lowest = grades[0];

  for (let grade of grades) {
    total += grade;
    if (grade > highest) {
      highest = grade;
    }
    if (grade < lowest) {
      lowest = grade;
    }
  }

  const average = total / grades.length;
  const passing = average >= 60;
  return {
    total: total,
    average: average.toFixed(1),
    highest: highest,
    lowest: lowest,
    passing: passing,
  };
}

const gradesAnalyzed = gradeAnalyzer(grades);
console.log(gradesAnalyzed);
