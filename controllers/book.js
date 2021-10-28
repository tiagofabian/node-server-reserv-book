const Book = require("../models/book");
const slugify = require("slugify");

exports.create = async (req, res) => {
    try {
        const { name } = req.body;

        res.json(await new Book({ name, slug: slugify(name) }).save());
    } catch (err) {
        res.status(400).json({
            err: "Create book failed",
        });
    }
};

exports.read = async (req, res) => {
    let book = await Book.findOne({ slug: req.params.slug }).exec();
    res.json(book);
};

exports.update = async (req, res) => {
    const { name } = req.body;

    try {
        const updated =  await Category.findOneAndUpdate(
            { slug: req.params.slug },
            { name, slug: slugify(name) },
            { new: true }, 
        );
        res.json(updated);
    } catch(err) {
        res.status(400).json({
            err: "Create update failed - " + err,
        });
    }
};

exports.remove = async (req, res) => {
    try {
        const deleted = await Book.findOneAndDelete({ slug: req.params.slug }).exec();
        res.json(deleted);
    } catch(err) {
        res.status(400).json({
            err: "Create deleted failed",
        });
    }
};

exports.list = async (req, res) =>
    res.json(await Book.find({}).sort({ createAt: -1 }).exec());
