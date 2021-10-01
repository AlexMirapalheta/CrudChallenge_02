// class Routes {
//   constructor() {
//     this.routes = require('express').Router();
//     this.cityValidation = require('../validation/cityValidation');
//     this.cityController = require('../controller/cityController');
//     this.clientValidation = require('../validation/clientValidation');
//     this.clientController = require('../controller/clientController');
//
//     this.routingService();
//   }
//
//   routingService() {
//     this.routes.post('/city', this.cityValidation.checkAll, this.cityController.create);
//     this.routes.get('/city/name/:name', this.cityValidation.checkName, this.cityController.findByName);
//     this.routes.get('/city/state/:state', this.cityValidation.checkState, this.cityController.fyndByState);
//
//     this.routes.post('/client', this.clientValidation.checkAll, this.clientController.cretate);
//     this.routes.get('/client/name/:clientName', this.clientValidation.checkFullName, this.clientController.findByName);
//     this.routes.get('/client/id/:id', this.clientValidation.checkId, this.clientController.findById);
//     this.routes.put('/client/id', this.clientValidation.checkUpdate, this.clientController.updateName);
//     this.routes.delete('/client/id', this.clientValidation.checkId, this.clientController.delete);
//   }
// }
//
// module.exports = new Routes();

const routes = require('express').Router();

const cityValidation = require('../validation/cityValidation');
const cityController = require('../controller/cityController');

const clientValidation = require('../validation/clientValidation');
const clientController = require('../controller/clientController');

routes.get('/', (req, res) => {
  console.log('[ROUTES] Root');
  res.status(200).send('WELCOME');
});

routes.post('/city', cityValidation.checkAll, cityController.create);
routes.get('/city/name/:name', cityValidation.checkName, cityController.findByName);
routes.get('/city/state/:state', cityValidation.checkState, cityController.fyndByState);

routes.post('/client', clientValidation.checkAll, clientController.cretate);
// routes.get('/client/name/:clientName', clientValidation.checkFullName, clientController.findByName);
// routes.get('/client/id/:id', clientValidation.checkId, clientController.findById);
// routes.put('/client/id', clientValidation.checkUpdate, clientController.updateName);
// routes.delete('/client/id', clientValidation.checkId, clientController.delete);

module.exports = routes;
