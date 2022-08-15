const router = require('express').Router();
const User = require('../models/User');

// Register
router.get('/register', async (req, res) => {
    const user = await new User({
        username: "John",
        email: "email@john.com",
        password: "password"
    })

    await user.save();
    res.send("ok");
})

module.exports = router