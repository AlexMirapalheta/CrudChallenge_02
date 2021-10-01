const CityController = require('../controller/cityController');
const getAll = require('../validation/city/getAll');


module.exports = (server, routes, prefix = '/city') => {
  routes.get('/', getAll, CityController.getAll);
  server.use(prefix, routes);
}