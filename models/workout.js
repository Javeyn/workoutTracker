const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//COLLECTION OF EXERCISES
const WorkoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  // EXERCISES ARE STORED ON A WORKOUT
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;