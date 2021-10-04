const Joi = require('joi');

module.exports = async (req, res, next) => {
  console.log('[VALIDATION] Create Client');
  try {
    const schema = Joi.object({
      fullname: Joi.string().min(2).max(50).trim().required(),
      gender: Joi.string()
        .length(1)
        .pattern(/^[MFO]$/)
        .uppercase()
        .trim()
        .required(),
      birthdate: Joi.date().less('now').required(),
      city: Joi.string().alphanum().length(24).trim().required()
    });

    const { error } = await schema.validate(req.query, { abortEarly: true });
    if (error) throw error;

    return next();
  } catch (error) {
    console.log(`[VALIDATION] Invalid Parameters To Create a New Record\n${error}`);
    return res.status(400).json(error);
  }
};
