const { getAggragate, coulmnNamesQuery } = require('../mysql')

module.exports.getColumnHandler = (req, res) => {
  coulmnNamesQuery(res.locals.db, function (error, results) {
    if (error) throw error;
    res.send(JSON.stringify({"status": 200, "error": error, "variables": results }));
  });
}

module.exports.getAggragateHandler = (req, res) => {
  getAggragate(res.locals.db, req.query.column, function (error, results) {
    if (error) throw error;
    res.send(JSON.stringify({"status": 200, "error": error, "response": results, express: 'Hello From Express' }));
  });
}