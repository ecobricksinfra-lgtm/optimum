const User = require('../model/user.modal.js')

const handleLogin = async (req, res) => {
    console.log("req----",req)
    try {
        const user = await User.find({
            username: req.body?.username,
            password: req.body?.password,
        });
        console.log('users', user)
        console.log("users ----11",JSON.stringify(user))
        if (!user) {
            return res.status(404).send({ message: 'User not found',  data:user});
        }else{
            return res.status(200).send({ message: 'User found',  data:user});
        }
        
    } catch (e) {
        console.error(e)
        return res.status(500).send(e)
    }
}

module.exports = {
    handleLogin,
}
