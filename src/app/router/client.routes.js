const clientController = require('../controller/clientController');

const createCheck = require('../validation/client/create');
const readCheck = require('../validation/client/read');
const updateCheck = require('../validation/client/update');
const deleteCheck = require('../validation/client/delete');

module.exports = (server, routes, prefix = '/client') => {
  routes.post('/', createCheck, clientController.cretate);
  routes.get('/', readCheck, clientController.getAll);
  routes.put('/', updateCheck, clientController.update);
  routes.delete('/', deleteCheck, clientController.delete);
  server.use(prefix, routes);
};
