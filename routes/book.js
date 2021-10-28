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
} = require("../controllers/book");


// endpoint routes
router.post("/book", authCheck, adminCheck, create);
router.get("/book/:slug", read);
router.put("/book/:slug", authCheck, adminCheck, update);
router.delete("/book/:slug", authCheck, adminCheck, remove);
router.get("/books", list);

module.exports = router;
