const { getAggragate, coulmnNamesQuery } = require('../mysql')
const { getColumnHandler, getAggragateHandler } = require('../handlers')

module.exports.createRoutes = (app) => {
  app.get('/api/hello', getAggragateHandler)

  app.get('/api/columns', getColumnHandler)
}