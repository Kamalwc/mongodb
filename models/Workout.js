const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: {
          type: String,
          name: String,
          duration: Number,
          weight: Number,
          reps: Number,
          sets: Number
        }
});

const User = mongoose.model("Workout", WorkoutSchema);

module.exports = User;
