const { query } = require('express');
const clientService = require('../service/clienteService');

class ClientController {
  async cretate(req, res) {
    console.log('[CLIENT CONTROLLER] Create');
    try {
      const query = req.query;
      const result = await clientService.create(query);
      if (result) {
        res.status(200).json({ message: 'Client Created Successifuly' });
      } else {
        res.status(400).json({ message: 'Client Already Exist' });
      }
    } catch (error) {
      console.log(`[CLIENT CONTROLLER] Create Client Error:\n${error}`);
      res.status(500).json({ message: 'Internal Problems' });
    }
  }

  async getAll(req, res) {
    console.log('[CLIENT CONTROLLER] getAll');
    try {
      const query = req.query;
      const result = await clientService.getAll(query);
      if (result.length === 0) {
        return res.status(204).send({ message: 'No Clients Found' });
      }
      return res.status(200).json(result);
    } catch (error) {
      console.log(`[CLIENT CONTROLLER] Server Error:\n${error}`);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async update(req, res) {
    console.log('[CLIENT CONTROLLER] Update');
    try {
      const query = req.query;
      const result = await clientService.update(query);
      if (result) return res.status(200).json({ message: 'Client Updated Successfully' });
      return res.status(204).json({ message: 'No Client Found' });
    } catch (error) {
      console.log(`[CLIENT CONTROLLER] Server Error:\n${error}`);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async delete(req, res) {
    console.log('[CLIENT CONTROLLER] Delete');
    try {
      const query = req.query;
      const result = await clientService.delete(query);
      if (result) return res.status(200).json({ message: 'Client Delete Successfully' });
      return res.status(404).json({ message: 'No Client Found' });
    } catch (error) {
      console.log(`[CLIENT CONTROLLER] Server Error:\n${error}`);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = new ClientController();
