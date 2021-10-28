const express = require("express");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");
// controllers
const {
    create,
    read,
    update,
    remove,
    list
} = require("../controllers/reservation");

// endpoint routes
router.post("/reservation", authCheck, create);
router.get("/reservation/:slug", read);
router.put("/reservation/:slug", authCheck, adminCheck, update);
router.delete("/reservation/:slug", authCheck, remove);
router.get("/reservations", authCheck, list);

module.exports = router;