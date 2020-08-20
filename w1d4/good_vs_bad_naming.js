const gradeFilter = (arr, cb1, cb2) => {
  for (const e of arr) {
    if (cb1(e)) {
      cb2(e)
    }
  }
}

const gradeFilter = (grades, conditionCB, actionCB) => {
  for (const grade of grades) {
    if (conditionCB(grade)) {
      actionCB()
    }
  }
}