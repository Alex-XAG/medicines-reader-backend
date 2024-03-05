const express = require("express");

const { isValidId, authenticate } = require("../../middleVares");

const medicines = require("../../models/medicines");

const router = express.Router();

router.get("/", medicines.listMedicines);

// router.get("/:id", authenticate, isValidId, contacts.getContactById);

// router.post("/", authenticate, contacts.addContact);

// router.put("/:id", authenticate, isValidId, contacts.updateContact);

// router.patch(
//   "/:id/favorite",
//   authenticate,
//   isValidId,
//   contacts.updateStatusContact
// );

// router.delete("/:id", authenticate, isValidId, contacts.removeContact);

module.exports = router;
