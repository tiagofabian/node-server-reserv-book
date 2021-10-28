const User = require("../models/user");

exports.createOrUpdate = async (req, res) => {
    const { picture, email } = req.user;

    const user = await User.findOneAndUpdate(
        { email },
        { name: email.split("@")[0], picture },
        { new: true }
    );
    
    if (user) {
        console.log("USER UPDATE", user);
        res.json(user);
    } else {
        const newUser = await new User({
            email,
            name: email.split("@")[0],
            picture,
        }).save();
        console.log("USER CREATED", newUser);
        res.json(newUser);
    }
};

exports.currentUser = async (req, res) => {
    const { email } = req.user;
    const user = await User.findOne({ email }).exec();

    if (user) {
        console.log("USER FOUND", user);
        res.json(user);
    } else {
        console.log("NOT FOUND");
        res.status(404).json({
            err: "USER NOT FOUND",
        });
    }
};

exports.remove = async (req, res) => {
    const { email } = req.user;

    try {
        const removed = await User.findOneAndDelete({ email }).exec();
        res.json(removed);
    } catch(err) {
        res.status(400).json({
            err: "remove failed"
        });
    }
};

exports.list = async (req, res) => 
    res.json(await User.find({}).sort({ createAt: -1 }).exec());