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
app.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// getworkouts in range 
app.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//add excercise
app.put("/api/workouts/:id", ({ body }, res) => {
  Workout.create(body)
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//createWorkout
app.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + './public/index.html'));
});

app.get('/stats', function(req, res) {
  res.sendFile(path.join(__dirname + './public/stats.html'));
});

app.get('/exercise', function(req, res) {
  res.sendFile(path.join(__dirname + './public/exercise.html'));
});

app.get('/exercise?', function(req, res) {
  res.sendFile(path.join(__dirname + './public/exercise.html'));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});