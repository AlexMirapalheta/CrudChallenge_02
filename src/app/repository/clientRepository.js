const clientModel = require('../model/client');
const clearHelper = require('../../helpers/clear');

class ClientRepository {
  async create(payload) {
    try {
      clearHelper(payload);
      return await clientModel.create(payload);
    } catch (error) {
      console.log(`[CLIENT REPOSIROTY] Error on Try Create a New Clients:\n${error}`);
      throw error;
    }
  }

  async getAll(payload) {
    try {
      clearHelper(payload);
      return await clientModel.find(payload).populate('city');
    } catch (error) {
      console.log(`[CLIENT REPOSIROTY] Error on Try List All Clients:\n${error}`);
      throw error;
    }
  }

  async update(payload) {
    try {
      clearHelper(payload);
      return await clientModel.findByIdAndUpdate(payload, payload, { new: true });
    } catch (error) {
      console.log(`[CLIENT REPOSIROTY] Error on Try Update Client:\n${error}`);
      throw error;
    }
  }
  async delete(payload) {
    try {
      clearHelper(payload);
      return await clientModel.findByIdAndDelete(payload);
    } catch (error) {
      console.log(`[CLIENT REPOSIROTY] Error on Try Delete Client:\n${error}`);
      throw error;
    }
  }
}

module.exports = new ClientRepository();
