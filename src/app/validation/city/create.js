const Joi = require('joi');
const { onlyLetters, onlyUpperCase } = require('../../../helpers/regex');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().pattern(onlyLetters).min(3).max(30).trim().required(),
      state: Joi.string().pattern(onlyUpperCase).length(2).uppercase().trim().required()
    });

    const { error } = await schema.validate(req.query, { abortEarly: true });
    if (error) throw error;

    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
