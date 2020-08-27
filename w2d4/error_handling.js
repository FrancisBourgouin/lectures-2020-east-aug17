const fridge = {
  "🍳": { name: "Egg & Pan", quantity: 1 },
  "🥟": { name: "Secret dumpling", quantity: 1 },
  "🥯": { name: "Pre cut bagel ?", quantity: 1 },
  "🍙": { name: "Onigiri", quantity: 1 },
  "🍤": { name: "Cooked Schrimps", quantity: 1 },
  "🍄": { name: "Mushrooms", quantity: 1 }
}

// fetching from fridge, take in an array of ingredient and remove them from the fridge
// if missing an ingredient, return a buy more and fill your fridge message

const fetchFromFridge = (fridge, ingredientList) => {
  for (const ingredient of ingredientList) {
    const fridgeIngredients = Object.keys(fridge)
    if (fridgeIngredients.includes(ingredient)) {
      console.log(`Took ${fridge[ingredient].name}`)
      delete fridge[ingredient]
    } else {
      return "GO BUY MORE STUFF 💰💲💰"
    }
  }

  return `Look at my dish with those ingredients ${ingredientList}`
}

const fetchFromFridgeTry = (fridge, ingredientList) => {
  try {
    for (const ingredient of ingredientList) {
      const fridgeIngredients = Object.keys(fridge)
      console.log(`Took ${fridge[ingredient].name}`)
      delete fridge[ingredient]
    }
  }
  catch (error) {
    // console.log(error)
    return `GO BUY THE THINGS THIS IS AN ERROR ${ingredient} is missing`

  }

  return `Look at my dish with those ingredients ${ingredientList}`
}

const fetchFromFridgeTryAsync = (fridge, ingredientList) => {
  try {
    setTimeout(() => {
      for (const ingredient of ingredientList) {
        const fridgeIngredients = Object.keys(fridge)
        console.log(`Took ${fridge[ingredient].name}`)
        delete fridge[ingredient]
      }
    }, 2000)
  }
  catch (error) {
    return `GO BUY THE THINGS THIS IS AN ERROR ${ingredient} is missing`
  }
  return `Look at my dish with those ingredients ${ingredientList}`
}




// console.log(fetchFromFridgeTry(fridge, ["🍄", "🥯", "🍤"]))
// console.log(fetchFromFridgeTry(fridge, ["🍄", "🥯", "🍤"]))
console.log(fetchFromFridgeTryAsync(fridge, ["🍄", "🥯", "🍤", "🧨"]))

console.log("THE END!")