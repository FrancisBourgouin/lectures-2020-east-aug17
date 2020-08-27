// Chaining promises works fine, but if we had to functions depending on another one
// we can use Promise.all to wait for both of them
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

const weatherData = (imgList) => {
  return new Promise((resolve, reject) => {
    resolve("Weather stuff")
  })
}

const fetchInstagramPictures = (account) => {
  return new Promise((resolve, reject) => {
    resolve("Pictures")
  })
}

const fetchMaps = (imgList) => {
  return new Promise((resolve, reject) => {
    resolve("Map stuff")
  })
}

fetchInstagramPictures(account)
  .then(imgList => {
    return Promise.all([weatherData(imgList), fetchMaps(imgList)])
      .then(res => {
        const weather = res[0]
        const maps = res[1]
        return { imgList, weather, maps }
      })
  })
  .catch(() => console.log("Something went wrong"))



// const output = []

// output.push
// output.push
// output.push

// output[0] = result of 1st promise
// output[1] = result of 2nd promise