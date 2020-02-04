const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    workout: {
        date: {
            type: Date,
            default: Date.now
        },
    },
    exercise: {
        name: {
            type: String,
        },
        exerciseType: {
            type: String,
        },
        duration: {
            type: Number,
        },
        distance: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
    }

});


const Workout = mongoose.model("Workout", UserSchema);

module.exports = Workout;