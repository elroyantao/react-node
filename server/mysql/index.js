var mysql = require("mysql")

module.exports.connectDb = () => {
  const db = mysql.createConnection({
		host     : 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
		user     : 'test-read',
		password : 'xnxPp6QfZbCYkY8',
		database : 'birdietest'
  })
  db.connect()
  return db
}

const getCountByColumnQuery = `SELECT ??, COUNT(*) as count, AVG(age) 
  FROM census_learn_sql
  GROUP BY ??
  ORDER BY count DESC
  LIMIT 100`

module.exports.getAggragate = (db, column, callback) => {
  const query = mysql.format(getCountByColumnQuery, [column, column])
  console.log(column)
  return db.query(query, callback)
}

module.exports.coulmnNamesQuery = (db, callback) => {
  return db.query('SHOW columns FROM census_learn_sql', callback)
}