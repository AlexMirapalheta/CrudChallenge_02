const clientModel = require('../model/client');

const clearHelper = require('../../helpers/clear');
const ageHelper = require('../../helpers/age');
const age = require('../../helpers/age');

class ClientRepository {
  async create(payload) {
    console.log(`[CLIENT REPOSITORY] Create`);
    try {
      ageHelper(payload);
      clearHelper(payload);
      return await clientModel.create(payload);
    } catch (error) {
      console.log(`[CLIENT REPOSIROTY] Error on Try Create a New Clients:\n${error}`);
      throw error;
    }
  }

  async getAll(payload) {
    console.log(`[CLIENT REPOSITORY] getAll`);
    try {
      clearHelper(payload);
      const result = await clientModel.find(payload).populate('city');
      ageHelper(result);
      return result;
    } catch (error) {
      console.log(`[CLIENT REPOSIROTY] Error on Try List All Clients:\n${error}`);
      throw error;
    }
  }

  async update(payload) {
    console.log(`[CLIENT REPOSITORY] Update`);
    try {
      clearHelper(payload);
      const result = await clientModel.findByIdAndUpdate(payload, payload, { new: true });
      return result;
    } catch (error) {
      console.log(`[CLIENT REPOSIROTY] Error on Try Update Client:\n${error}`);
      throw error;
    }
  }
  async delete(payload) {
    console.log(`[CLIENT REPOSITORY] Delete`);
    try {
      clearHelper(payload);
      const result = await clientModel.findByIdAndDelete(payload);
      return result;
    } catch (error) {
      console.log(`[CLIENT REPOSIROTY] Error on Try Delete Client:\n${error}`);
      throw error;
    }
  }
}

module.exports = new ClientRepository();
