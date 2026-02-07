const User = require("../model/user.modal")

const handleLogin = async (req, res) => {
    try {
        const users = await User.find({
            name: req.body.name,
            password: req.body.password,
        })
        return res.send(users)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    handleLogin,
}
