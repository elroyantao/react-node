const express = require('express')

const { createRoutes } = require('./routes')

const app = express();
const port = process.env.PORT || 5000;

createRoutes(app)

app.listen(port, () => console.log(`Listening on port ${port}`));