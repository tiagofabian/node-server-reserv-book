const express = require("express");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controllers
const { 
    createOrUpdate,
    currentUser,
    remove,
    list
} = require("../controllers/user");

// endpoints
router.post("/create-or-update-user", authCheck, createOrUpdate);
router.post("/current-user", authCheck, currentUser);
router.post("/current-admin", authCheck, adminCheck, currentUser);
router.delete("/delete-user", authCheck, adminCheck, remove);
router.post("/users", authCheck, adminCheck, list);

module.exports = router;