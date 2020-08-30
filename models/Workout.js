const mongoose = require("mongoose");

const Schema = mongoose.Schema;

<<<<<<< HEAD
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

const Workout = mongoose.model("Workout", WorkoutSchema);
=======
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "enter excercise"
        },
        name: {
          type: String,
          trim: true,
          required: "enter exercise name"
        },
        duration: {
          type: Number,
          required: "enter exercise duration in min" 
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);


workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);
>>>>>>> 7db6f320ba22e5bdcd0ac784460a36b21d86872f

module.exports = Workout;
