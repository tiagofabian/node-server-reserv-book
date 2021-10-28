const slugify = require("slugify");
const Reservation = require("../models/reservation");

exports.create = async (req, res) => {
    const { userName, bookName } = req.body;
    
    try {
        const reserve = await new Reservation({ user: userName, book: bookName }).save();
        res.json(reserve);
    } catch(err) {
        res.status(400).json({
            err: "failed",
        });
    }
};

exports.read = async (req, res) => {
    const read = await Reservation.findOne({ slug: req.params.slug }).exec();
    json(read);
};

exports.update = async (req, res) => {
    const { code, returnDate } = req.body;
    try {
        const updated = await Reservation.findOneAndUpdate(
            { slug: req.params.slug },
            { code, slug: slugify(code), returnDate },
            { new: true },
        );
        res.json(updated);
    } catch(err) {
        res.status(404).json({
            err: "failed update",
        });
    }
};

exports.remove = async (req, res) => {
    try {
        const deleted = await Reservation.findOneAndDelete({ slug: req.params.slug }).exec();
        res.json(deleted);
    } catch(err) {
        res.status(404).json({
            err: "deleted failed",
        });
    }
};

exports.list = async (req, res) =>
    res.json(await Reservation.find({}).sort({ createAt: -1 }).exec());