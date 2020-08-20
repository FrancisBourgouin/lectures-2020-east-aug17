const repeatTheWord = (word, amount) => {
  for (let i = 0; i < amount; i++) {
    console.log(word)
  }
}

repeatTheWord("Word", 5)

const listOfItems = ["Guitar", "Bridge", "Clothing Rack", "Fan"]

const repeatFiveTimes = item => repeatTheWord(item, 5)

listOfItems.forEach(repeatFiveTimes)
listOfItems.forEach(item => repeatTheWord(item, 5))

const forEachFct = (arr, callback) => {
  for (const item of arr) {
    callback(item)
  }
}

forEachFct(listOfItems, item => repeatTheWord(item, 5))