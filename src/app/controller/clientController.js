const clientService = require('../service/clienteService');

class ClientController {
  async cretate(req, res) {
    try {
      const query = req.query;
      const result = await clientService.create(query);
      if (result) res.status(200).json(result);
      res.status(400).json({ message: 'Client Already Exist' });
    } catch (error) {
      console.log(`[CLIENT CONTROLLER] Create Client Error:\n${error}`);
      res.status(500).json({ message: 'Internal Problems' });
    }
  }

  async getAll(req, res) {
    try {
      const query = req.query;
      const result = await clientService.getAll(query);
      if (result.length !== 0) return res.status(200).json(result);
      return res.status(204).json();
    } catch (error) {
      console.log(`[CLIENT CONTROLLER] Server Error:\n${error}`);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async update(req, res) {
    try {
      const query = req.query;
      const result = await clientService.update(query);
      if (result) return res.status(200).json(result);
      return res.status(204).json();
    } catch (error) {
      console.log(`[CLIENT CONTROLLER] Server Error:\n${error}`);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async delete(req, res) {
    try {
      const query = req.query;
      const result = await clientService.delete(query);
      if (result) return res.status(200).json(result);
      return res.status(204).json();
    } catch (error) {
      console.log(`[CLIENT CONTROLLER] Server Error:\n${error}`);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = new ClientController();
