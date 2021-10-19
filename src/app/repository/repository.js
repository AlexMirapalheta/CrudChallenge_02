const clearHelper = require('../../helpers/clear');

class Repository {
  constructor(schema) {
    this.schema = schema;
  }

  async create(payload) {
    try {
      clearHelper(payload);
      const result = await this.schema.create(payload);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getAll(payload, options) {
    try {
      clearHelper(payload);
      const result = await this.schema.find(payload).populate(options);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async update(payload) {
    try {
      clearHelper(payload);
      const result = await this.schema.findByIdAndUpdate(payload._id, payload, { new: true });
      return result;
    } catch (error) {
      throw error;
    }
  }

  async delete(payload) {
    try {
      clearHelper(payload);
      const result = await this.schema.findByIdAndDelete(payload);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Repository;
