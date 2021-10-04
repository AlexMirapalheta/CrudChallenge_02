const cityService = require('../service/cityService');

class CityController {
  async create(req, res) {
    console.log('[CITY CONTROLLER] Create');
    try {
      const query = req.query;
      const result = await cityService.create(query);
      if (result) {
        res.status(200).send({ message: 'City Created' });
      } else {
        res.status(400).send({ message: 'City Already Exist' });
      }
    } catch (error) {
      console.log(`[CITY CONTROLLER] Server Error:\n${error}`);
      res.status(500).send({ message: 'Internal Server Error' });
    }
  }

  async getAll(req, res) {
    console.log('[CITY CONTROLLER] getAll');
    try {
      const query = req.query;
      const result = await cityService.listAll(query);
      if (result.length === 0) {
        return res.status(204).send({ message: 'No Cities Found' });
      }
      return res.status(200).send(result);
    } catch (error) {
      console.log(`[CITY CONTROLLER] Server Error:\n${error}`);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = new CityController();
