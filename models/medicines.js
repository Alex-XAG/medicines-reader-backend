const { Medicine } = require("./medicine");

const listMedicines = async (req, res, next) => {
  try {
    const allMedicines = await Medicine.find();
    res.json(allMedicines);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listMedicines,
};
