const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const medicineSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    measurementUnit: {
      type: String,
      default: "None",
    },
    price: {
      type: Number,
      required: true,
    },
    shop: {
      type: String,
      required: true,
    },
    form: {
      type: String,
      required: true,
    },
  },
  { version: false }
);

const Medicine = model("medicine", medicineSchema);

module.exports = { Medicine };
