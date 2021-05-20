const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
// jquery
  .use(
    "/static/vendor/jquery",
    express.static(__dirname + "/../node_modules/jquery/dist")
  )
  //
  // bootstrap
  // - set vendor static path (defines a route to the modules dist as-is)
  .use(
    "/static/vendor/bootstrap",
    express.static(__dirname + "/../node_modules/bootstrap/dist")
  ).
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))