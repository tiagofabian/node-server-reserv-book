const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const reservationSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            index: true,
        },
        code: {
            type: String,
            trim: true,
            lowercase: true,
            required: "Code is required",
            minlength: 8,
            maxlength: 8,
        },
        user: {
            type: ObjectId,
            ref: "User",
            required: "The user is required",
        },
        book: [
            {
                type: ObjectId,
                ref: "Book",
                required: "The book is required",
            },
        ],
        returnDate: Date,
    },
    {timestamps: true}
);

module.exports = mongoose.model("Reservation", reservationSchema);