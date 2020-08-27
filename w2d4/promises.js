const fridge = {
  "🍳": { name: "Egg & Pan", quantity: 1 },
  "🥟": { name: "Secret dumpling", quantity: 1 },
  "🥯": { name: "Pre cut bagel ?", quantity: 1 },
  "🍙": { name: "Onigiri", quantity: 1 },
  "🍤": { name: "Cooked Schrimps", quantity: 1 },
  "🍄": { name: "Mushrooms", quantity: 1 },
  // "🧨": { name: "TNT YEAH", quantity: 1 }
}

// This function returns a promise that will randomly be resolved or rejected

const promiseExample = () => {
  return new Promise((resolveCB, rejectCB) => {
    setTimeout(() => {
      if (Math.round(Math.random())) {
        resolveCB("YAY")
      } else {
        rejectCB("NAY")
      }
    }, 1000)
  })
}

// If the promise is using the resolve callback, it will go to the .then method, then to the .finally
// If the promise is using the reject callback, it will go to the .catch method, then to the .finally

promiseExample()
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => console.log("THE END"))

// Here we took the original fetchFridgeContent with callbacks then:
//  - Replaced the actionCB(error, null) with reject(error)
//  - Replaced the actionCB(null, ingredientList) with resolve(ingredientList)

const fetchFridgeContent = (fridge, ingredientList) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        for (const ingredient of ingredientList) {
          console.log(`Took ${fridge[ingredient].name}`)
          delete fridge[ingredient]
        }
      } catch (error) {
        // return actionCB(error, null)
        return reject(error)
      }
      // return actionCB(null, ingredientList)
      return resolve(ingredientList)
    }, 1000)
  })
}

// We execute the fetchFridgeContent function, and if it is succesful, it will use the .then method
fetchFridgeContent(fridge, ["🍄", "🥯", "🍤"])
  .then(ingredientList => console.log(`Hey I made this ${ingredientList}`))
  .catch(error => console.log("Oh no, missing an ingredient"))

// We execute the fetchFridgeContent function, and if it is failing, it will use the .catch method
fetchFridgeContent(fridge, ["🎂"])
  .then(ingredientList => console.log(`Hey I made this ${ingredientList}`))
  .catch(error => console.log("Oh no, missing an ingredient"))


