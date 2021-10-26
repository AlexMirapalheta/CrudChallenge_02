const CitySchema = require('../schema/city');
const Repository = require('./repository');

class CityRepository extends Repository {
  constructor() {
    super(CitySchema);
    this.schema = CitySchema;
  }
  async listAll(payload) {
    if (!payload.name) return super.getAll(payload);

    const dbQuery = { $and: [] };
    dbQuery.$and.push({ name: { $regex: payload.name, $options: 'i' } });
    delete payload.name;
    return super.getAll({ ...dbQuery, ...payload });
  }
}

module.exports = new CityRepository();
