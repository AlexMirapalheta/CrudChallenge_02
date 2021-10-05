const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      _id: Joi.string().alphanum().length(24).trim(),
      name: Joi.string()
        .pattern(/^[^0-9]+$/)
        .min(3)
        .max(30)
        .trim(),
      state: Joi.string()
        .pattern(/^[A-Z]+$/)
        .length(2)
        .uppercase()
        .trim()
    });

    const { error } = await schema.validate(req.query, { abortEarly: true });
    if (error) throw error;

    return next();
  } catch (error) {
    console.log(`[VALIDATION] City Parameters Dont Validated:\n${error}`);
    return res.status(400).json({ message: 'Invalid City Parameters' });
  }
};
