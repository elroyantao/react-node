const { getAggragate, coulmnNamesQuery } = require('../mysql')
const { getColumnHandler, getAggragateHandler } = require('../handlers')

module.exports.createRoutes = (app) => {
  app.get('/api/aggregate', getAggragateHandler)

  app.get('/api/columns', getColumnHandler)
}