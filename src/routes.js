// IMPORT
const { Router } = require('express');

// BODY
const routes = new Router();

routes.get('/',(req,res) => {
  return res.json({message: 'Hello World'});
})

// EXPORT
module.exports = routes;