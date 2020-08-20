// Iteration recap!

// c-style
// while do
// for of
// for in
// .forEach
// .map
// .filter
// .reduce

for (let i = 0; i < something; i++) {
  // do our stuff
}

const arr = [1, 2, 3]
for (let i = 0; i < arr.length; i++) {
  const item = arr[i]
}

for (const item of arr) {
  // 
}

for (let i = 0; i < arr.length; i++) {
  const key = i
}

for (const key in arr) {

}

let i = 0
while (i < something) {
  i++
}

while (true) {

}


const listOfNames = ["Little Chicken", "Petit Poulet", "Pequeno Pollo"]

// I'll use a for to console.log the names
// I'll use a for..of to console.log the names

// I'll iterate over the array and console each one

for (const name of listOfNames) {
  console.log(name)
}

for (let i = 0; i < listOfNames.length; i++) {
  console.log(listOfNames[i])
}

for (let i = 0; i < listOfNames.length; i++) {
  const name = listOfNames[i]
  console.log(name)
}

listOfNames.forEach((name, index) => console.log(name, index))