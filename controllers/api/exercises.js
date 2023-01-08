const User = require('../../models/user')
const Exercise = require('../../models/exercise')

module.exports = {
    getOne,
    getAll,
    create,
    update,
    deleteExercise
}

async function getAll(req, res) {
    const exercises = await Exercise.find({})
    const obj = {}
    if (exercises.length) {
        exercises.forEach((elem) => {
            obj[elem.qrCode] = elem;
        });
    }
    res.json(obj)
}

async function create(req, res) {
    try {
        req.body.user = req.user._id;
        let exercise = await Exercise.create(req.body);
        res.json(exercise);
    } catch(err) {
        res.status(400).json(err);
    }
}

async function getOne(req, res) {
    let exercise = await Exercise.findOne({'_id': req.params.exerciseId});
    res.json(exercise);
}

async function update(req, res) {
    let exercise = await Exercise.findOne({'_id': req.params.exerciseId});
    Object.entries(req.body).forEach(el => exercise[el[0]] = el[1]);
    await exercise.save();
    res.json(exercise);
}

async function deleteExercise(req, res) {
    await Exercise.deleteOne({_id: req.body.exerciseId});
}