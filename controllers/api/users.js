const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    create, 
    login, 
    checkToken,
    updateUser,
    // addSet
}

async function create(req, res) {
    try {
        // Add the user to the DB
        const user = await User.create(req.body)
        // Token will be a string
        const token = createJWT(user)
        // Yes, we can use res.json to send back just a string
        // The client code needs to take this into consideration
        res.json(token)
    } catch(err) {
        // Client will check for non-2xx (200) status code
        // 400 = Bad Request
        res.status(400).json(err)
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) throw new Error()
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error()
        res.json( createJWT(user) )
    } catch {
        res.status(400).json('Bad Credentials')
    }
}

function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
}

async function updateUser(req, res) {
    let user = await User.findOne({'id': req.body._id});
    Object.entries(req.body).forEach(el => user[el[0]] = el[1]);
    await user.save();
    res.json(user);
}
/*-- Helper Function --*/
function createJWT(user) {
    return jwt.sign(
    // Data Payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
    )
}

async function addSet(req, res) {
    console.log(req.body)
    // console.log(req.user)
    // const user = await User.findOne({ email: req.user.email })
    // user.sets.push(req.body)
    // await user.save()
}