const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            index: true,
        },
        name: {
            type: String,
            trim: true,
            required: "Name is required",
            minlength: [2, "Too short"],
            maxlength: [32, "Too long"],
        },
        email: {
            type: String,
            required: true,
            index: true,
        },
        role: {
            type: String,
            default: "subscriber",
        },
        library: {
            type: Array,
            default: [],
        },
        address: String,
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", userSchema);