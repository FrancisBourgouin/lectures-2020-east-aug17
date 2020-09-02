const checkPassword = (bcrypt, userObj, formPassword) => {
  // userObj.password === formPassword (cannot do that since hashed password)
  const storedPassword = userObj ? userObj.password : "";
  return bcrypt.compareSync(formPassword, storedPassword)
}

const createUser = (userObj, nicename, fullName, password) => {
  // const randomId = Math.round(Math.random() * 1000)
  userObj[nicename] = {
    nicename,
    fullName,
    password
  }
}

module.exports = { checkPassword, createUser }