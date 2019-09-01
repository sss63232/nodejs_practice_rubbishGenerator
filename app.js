// require packages used in the project
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const getRubbishByTarget = require('./getRubbishByTarget')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting static files
app.use(express.static('public'))

app.get(
  `/`,
  (req, res) => {
    res.render('index')
  }
)

app.post(`/`, (req, res) => {
  const { target } = req.body
  const rubbish = getRubbishByTarget(target)
  res.render('index', {
    [target]: true,
    rubbish
  })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
