const express = require('express')

const { createRoutes } = require('./routes')
const { connectDb } = require('./mysql')

const app = express();
const port = process.env.PORT || 5000;

app.use(function(req, res, next) {
  res.locals.db = connectDb()
  next()
})

createRoutes(app)



app.listen(port, () => console.log(`Listening on port ${port}`));