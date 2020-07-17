const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Workout = require("./models/Workout.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

// getlastworkouts
///api/workouts
app.get("/wieght", (req, res) => {
  db.Workout.find({})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

//add excercise
//api/workouts/" + id
app.put("/update", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//createWorkout
///api/workouts
app.post("/create", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// /api/workouts/range
// getworkouts in range 

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


/* 
When the user loads the page, they should be given the option to create a new workout, or continue with their last workout.

The user should be able to:

Add exercises to a previous workout plan.

Add new exercises to a new workout plan.

View multiple the combined weight of multiple exercises on the stats page.
*/