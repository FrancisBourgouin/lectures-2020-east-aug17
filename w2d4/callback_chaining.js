const fridge = {
  "🍳": { name: "Egg & Pan", quantity: 1 },
  "🥟": { name: "Secret dumpling", quantity: 1 },
  "🥯": { name: "Pre cut bagel ?", quantity: 1 },
  "🍙": { name: "Onigiri", quantity: 1 },
  "🍤": { name: "Cooked Schrimps", quantity: 1 },
  "🍄": { name: "Mushrooms", quantity: 1 }
}

const fetchFridgeContent = (fridge, ingredientList, actionCB) => {
  setTimeout(() => {
    try {
      for (const ingredient of ingredientList) {
        console.log(`Took ${fridge[ingredient].name}`)
        delete fridge[ingredient]
      }
    } catch (error) {
      return actionCB(error, null)
    }
    return actionCB(null, ingredientList)
  }, 1000)
}

const doRecipe = (error, ingredientList) => {

  if (error) {
    console.log(`Let's order online, we don't have the ingredient`)
  } else {
    console.log(`Look at my dish with those ingredients ${ingredientList}`)
  }
}

fetchFridgeContent(fridge, ["🥯", "🍳"], doRecipe)


fetchFridgeContent(fridge, ["🥯", "🍳"], (error, ingredientList) => {
  if (error) {
    return console.log("Brunch failed, missing ingredients")
  }

  fetchFridgeContent(fridge, ["🥯", "🍳"], (error, ingredientList) => {
    if (error) {
      return console.log("Second serving failed")
    }

    console.log("HMM that was a good meal")
  })
})

console.log("THE END!")