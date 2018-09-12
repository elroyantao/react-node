module.exports.createRoutes = (app) => {
  app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' })
  })

}