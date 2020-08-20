// What is a callback ?

// What's an HoF ?

// Higher Order Functions
// Function that doesn't do much by itself
// - A function that calls another function
// - A function the generates another function 

const listOfNames = ["Little Chicken", "Petit Poulet", "Pequeno Pollo"]

// listOfNames.forEach()

const showNameInTheConsole = (name) => {
  console.log(`One of the names is ${name}`)
}

const singNameInTheConsole = (name) => {
  console.log(`🎶🎵🎶 ${name} 🎶🎵🎶`)
}

const forEachFct = (arr, callback) => {
  for (const item of arr) {
    callback(item)
  }
}

// forEachFct(listOfNames, showNameInTheConsole)
// forEachFct(listOfNames, singNameInTheConsole)


const grades = [66, 77, 88, 99, 50, 20, 0, 42]

const bGradeCondition = (grade) => grade < 90 && grade > 80
const aGradeCondition = (grade) => grade > 90
const cGradeCondition = (grade) => grade < 80 && grade > 70


// (grade) => grade < 80 && grade > 70


const filterGrades = (grades, conditionCallback) => {
  for (const grade of grades) {
    if (conditionCallback(grade)) {
      console.log(grade)
    }
  }

  return "Pouet pouet"
}
// Grade by A, B, C

filterGrades(grades, bGradeCondition)
filterGrades(grades, aGradeCondition)
filterGrades(grades, grade => grade < 60)

filterGrades(grades, function (grade) {
  return grade < 60
})

filterGrades(grades, (minGrade, maxGrade) => maxGrade - minGrade)
// 77 - undefined => NaN

const superFilter = filterGrades

superFilter(grades, grade => grade < 60)


const superFilterQuestionMark = filterGrades([])

console.log(superFilterQuestionMark)