const cityController = require('../controller/cityController');

const readCheck = require('../validation/city/getAll');
const createCheck = require('../validation/city/create');

module.exports = (server, routes, prefix = '/city') => {
  routes.get('/', readCheck, cityController.getAll);
  routes.post('/', createCheck, cityController.create);
  server.use(prefix, routes);
};
