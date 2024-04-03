const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400).json({ error: "Please Enter all Fields" });
        return;
    }

    const userExists = await User.findOne({ email: email });

    if (userExists) {
        res.status(400).json({ error: "User already exists" });
        return;
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    } else {
        res.status(400).json({ error: "Failed to create the user" });
    }
});


const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: `Bearer ${generateToken(user._id)}`,
        });
    } else {
        res.status(400).json({ error: "Invalid email or password" });
    }
});

module.exports = { registerUser, authUser };
