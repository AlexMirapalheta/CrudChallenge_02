const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string()
        .pattern(/^[^0-9]+$/)
        .min(3)
        .max(30)
        .trim()
        .required(),
      state: Joi.string()
        .pattern(/^[A-Z]+$/)
        .length(2)
        .uppercase()
        .trim()
        .required()
    });

    const { error } = await schema.validate(req.query, { abortEarly: true });
    if (error) throw error;

    return next();
  } catch (error) {
    console.log(`[VALIDATION] Invalid Parameters To Create a New Record:\n${error}`);
    return res.status(400).json({ message: 'Invalid City Parameters' });
  }
};
