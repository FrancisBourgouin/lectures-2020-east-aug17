// Review

const listOfNames = ["John", "Doe", "Chicken"]

const iterateNames = (listOfNames, actionCB) => {
  for (const name of listOfNames) {
    actionCB(name)
  }
}

// iterateNames(listOfNames, name => console.log(name))

const iterateNamesAsyncv1 = (listOfNames, actionCB) => {
  setTimeout(() => {
    for (const name of listOfNames) {
      actionCB(name)
    }
  }, 1000)
}

const iterateNamesAsyncv2 = (listOfNames, actionCB) => {
  let delay = 1000
  listOfNames.forEach((name, index) => {
    delay += 2000
    setTimeout(() => {
      actionCB(name)
    }, delay)
  })
}

const output = []
iterateNamesAsyncv2(listOfNames, name => {
  output.push(`${name}!`)
  console.log('inside CB', output) // [name1], [name1, name2] ...
})
console.log('after fct call', output) // [name1, name2, name3]