const cityService = require('../service/cityService');


class CityController {

  async create(req, res) {
    console.log('[CITY CONTROLLER] Create City Requested');
    try {
      const { name, state } = req.body;
      if (await cityService.create(name, state)) {
        console.log('[CITY CONTROLLER] City Created and Confirmation was Sended');
        res.status(200).send({ message: 'City Created' });
      } else {
        console.log('[CITY CONTROLLER] Sending Information About City Already Exist');
        res.status(400).send({ message: 'City Already Exist' });
      }
    } catch (error) {
      res.status(500).send({ message: 'Internal Problems' });
    }
  }

  async getAll(req, res) {
    try {
      const query = req.query;
      const result = await cityService.listAll(query);
      if (result.length !== 0) {
        return res.status(204).send();
      }
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).json(error); //TODO: trabalho do alex
    }
  }

  async findByName(req, res) {
    console.log('[CITY CONTROLLER] Find City By Name Requested');

    try {
      const city = await cityService.findByName(req.params.name);

      if (city.length !== 0) {
        console.log('[CITY CONTROLLER] City Found By Name and Information was Sended');
        res.status(200).send(city);
      } else {
        res.status(400).send({ message: 'Cities Not Found' });
      }
    } catch (error) {
      res.status(500).send({ message: 'Internal Problem' });
    }
  }

  async fyndByState(req, res) {
    console.log('[CITY CONTROLLER] Find City By State Requested');
    try {
      const city = await cityService.findByState(req.params.state);

      if (city.length !== 0) {
        console.log('[CITY CONTROLLER] City Found By State and Information was Sended');
        res.status(200).send(city);
      } else {
        res.status(400).send({ message: 'Cities Not Found' });
      }
    } catch (error) {
      res.status(500).send({ message: 'Internal Problem' });
    }
  }
}

module.exports = new CityController();
