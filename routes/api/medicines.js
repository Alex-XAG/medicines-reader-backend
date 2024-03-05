const express = require("express");

const medicines = require("../../models/medicines");

const router = express.Router();

router.get("/", medicines.listMedicines);

module.exports = router;
