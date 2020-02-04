const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
var path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", { useNewUrlParser: true, useUnifiedTopology: true });


app.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "public/exercise.html"));
});
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/api/workouts", (req, res) => {

  db.Workout.find({})
    //.populate("exercises")
    .then(dbWorkout => {
      console.log(dbWorkout);

      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
app.put("/api/workouts/:id", (req, res) => {
  console.log(req.body);

  db.Workout.findByIdAndUpdate(req.params.id, {
    $push: {
      exercises: req.body
    }
  })
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/api/workouts/", ({ body }, res) => {
  console.log(body);

  db.Workout.create(body)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});
app.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "public/stats.html"));
});

app.get("/api/workouts/range", (req, res) => {

  db.Workout.find({})
    //.populate("exercises")
    .then(dbWorkout => {
      console.log(dbWorkout);

      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});