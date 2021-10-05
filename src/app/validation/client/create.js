const Joi = require('joi');
const { onlyLetters, genderCases } = require('../../../helpers/regex');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      fullname: Joi.string().pattern(onlyLetters).min(5).max(50).trim().required(),
      gender: Joi.string().length(1).pattern(genderCases).uppercase().trim().required(),
      birthdate: Joi.date().less('now').required(),
      city: Joi.string().alphanum().length(24).trim().required()
    });

    const { error } = await schema.validate(req.query, { abortEarly: true });
    if (error) throw error;

    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
