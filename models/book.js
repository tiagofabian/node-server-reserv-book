const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            index: true,
        },
        title: {
            type: String,
            trim: true,
            required: "Name is required",
            minlength: [2, "Too short"],
            maxlength: [32, "Too long"],
        },
        publicationDate: {
            type: Date,
            required: "Date is required",
        },
        editorial: {
            type: String,
            maxlength: 25,
        },
        edition: {
            type: String,
            maxlength: 25,
        },
        language: {
            type: String,
            maxlength: 20,
        },
        pages: {
            type: Number,
            maxlength: 4,
        },
        description: {
            type: String,
            maxlength: 300,
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Book", bookSchema);