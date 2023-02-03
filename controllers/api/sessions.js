// const User = require('../../models/user')
const Session = require('../../models/session')

module.exports = {
    create
}

async function create(req, res) {
    let session = (await Session.find({ createdAt: {$gte : new Date().toDateString() }}))[0];
    if (session) {
        session.sets.push(req.body)
        session.save()
    } else {
        try {
            let newSession = await Session.create({});
            newSession.sets.push(req.body);
            newSession.save();
        } catch(err) {
            // console.log(err)
            res.status(400).json(err);
        }
    }
}