const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//WILL STORE CARIO AND RESISTANCE TRAINING
const ExerciseSchema = new Schema({

    name: {
        type: String
    },
    exerciseType: {
        type: String
    },
    duration: {
        type: Number
    },
    distance: {
        type: Number
    },
    weight: {
        type: Number
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    }


});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;