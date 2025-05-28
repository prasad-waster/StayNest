// schema.js
const Joi = require("joi");

const joiListingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().allow("", null),
    price: Joi.number().min(0).required(),
    country: Joi.string().required(),
    location: Joi.string().required(),
  }).required(),
});

module.exports = { joiListingSchema }; // ✅ named export

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().required(),
  }).required(),
});
