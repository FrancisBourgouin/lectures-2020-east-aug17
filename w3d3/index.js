const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')
const { checkPassword, createUser } = require('./helpers/helpers')

const app = express();
const port = 3000
const salt = bcrypt.genSaltSync(10);
const pockpock = bcrypt.hashSync("pockpock", salt);
const pockpock1 = bcrypt.hashSync("pockpock", salt);
const pockpock2 = bcrypt.hashSync("pockpock", salt);
const pockpock3 = bcrypt.hashSync("pockpock", salt);
const poumon = bcrypt.hashSync("poumon", salt);

console.log(pockpock)
console.log(pockpock1)
console.log(pockpock2)
console.log(pockpock3)
const userObj = {
  "pollo": {
    id: 1,
    nicename: "pollo",
    fullName: "Pequeño Pollo de la Pampa",
    password: pockpock
  },
  "poulet": {
    id: 2,
    nicename: "poulet",
    fullName: "Poulet tu avoir poussin cennes de bonbon",
    password: poumon
  }
}

app.use(express.static("public"));
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({
  name: 'session',
  keys: ['iamasuperkeyandilikesongs', 'pouet pouet yes spaces are okay why not']
}))

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // const { userId } = req.cookies
  // const fullName = userObj[userId] ? userObj[userId].fullName : ""
  const { userId } = req.session
  const fullName = userObj[userId] ? userObj[userId].fullName : ""
  const templateVars = { userId, fullName }
  res.render("index", templateVars);
});

app.get('/register', (req, res) => {
  res.render('register')
})

app.post('/register', (req, res) => {
  const { nicename, fullname, password } = req.body
  const hashedPassword = bcrypt.hashSync(password, salt);

  createUser(userObj, nicename, fullname, hashedPassword)
  req.session.userId = nicename
  console.log(userObj)
  res.redirect('/')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', (req, res) => {
  const { nicename, password } = req.body
  // const nicename = req.body.nicename
  // const password = req.body.password
  if (checkPassword(bcrypt, userObj[nicename], password)) {
    // res.cookie('userId', nicename)
    req.session.userId = nicename
    res.redirect('/')

  } else {
    res.send("BAD JOB")
  }

})

app.listen(port, () => console.log(`Express server running on port ${port}`));
