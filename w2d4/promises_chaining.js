const fridge = {
  "🍳": { name: "Egg & Pan", quantity: 1 },
  "🥟": { name: "Secret dumpling", quantity: 1 },
  "🥯": { name: "Pre cut bagel ?", quantity: 1 },
  "🍙": { name: "Onigiri", quantity: 1 },
  "🍤": { name: "Cooked Schrimps", quantity: 1 },
  "🍄": { name: "Mushrooms", quantity: 1 },
  // "🧨": { name: "TNT YEAH", quantity: 1 }
}

const fetchFridgeContent = (fridge, ingredientList) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        for (const ingredient of ingredientList) {
          console.log(`Took ${fridge[ingredient].name}`)
          delete fridge[ingredient]
        }
      } catch (error) {
        return reject(error)
      }
      return resolve(ingredientList)
    }, 1000)
  })
}

// We can chain promises, and will follow the path that was defined
// In that case, if the first fetchFridge is successful, it will go to the first .then,
// since the console.log is successful, it will go on to the second .then and so on

fetchFridgeContent(fridge, ["🍄", "🥯", "🍤"])
  .then(ingredientList => console.log(`Hey I made this ${ingredientList}`))
  .catch(() => console.log("Oh no, missing an ingredient"))
  .then(() => fetchFridgeContent(fridge, ["🧨"]))
  .then(() => console.log("HAHA I MADE THE RECIPE EXPLODE"))
  .catch(() => console.log("Did you try to blow the fridge up?"))


