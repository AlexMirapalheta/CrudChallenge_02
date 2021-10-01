class ClientController {
  constructor() {
    this.clientService = require('../service/clienteService');
  }

  async cretate(req, res) {
    console.log('[CLIENT CONTROLLER] Create Client Requested');
    try {
      const client = req.body;
      if (this.clientService.create(client)) {
        res.status(200).send({ message: 'Client Created Successifuly' });
      } else {
        res.status(400).send({ message: 'Client Already Exist' });
      }
    } catch (error) {
      res.status(500).send({ message: 'Internal Problems' });
    }
  }

  async findByName(name) {}

  async findById(id) {}

  async updateName(id, name) {}

  async delete(id) {}
}

module.exports = new ClientController();
