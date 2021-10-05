const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      _id: Joi.string().alphanum().length(24).trim(),
      fullname: Joi.string()
        .pattern(/^[^0-9]+$/)
        .min(2)
        .max(50)
        .trim(),
      gender: Joi.string()
        .pattern(/^[MFO]$/)
        .length(1)
        .uppercase()
        .trim(),
      birthdate: Joi.date().less('now'),
      city: Joi.string().alphanum().length(24).trim()
    });

    const { error } = await schema.validate(req.query, { abortEarly: true });
    if (error) throw error;

    return next();
  } catch (error) {
    console.log(`[VALIDATION] Client Parameters Dont Validated:\n${error}`);
    return res.status(400).json({ message: 'Invalid Parameters To Get a New Client' });
  }
};
