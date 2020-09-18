const express = require("express");
const bodyParser = require("body-parser");
const mongoClient = require("mongodb").MongoClient;
const object = require("mongodb").ObjectID;
const SERVER_PORT = 3000;

// Import config
require('dotenv/config');

var app = express();

app.use(bodyParser.json()); // Content-Type parsing for "application/json"
app.use(bodyParser.urlencoded({ extended: true })); // Content-Type parsing for "application/x-www-form-urlencoded" 

var database, workoutsCollection;

mongoClient.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        throw error;
    }

    console.log('Connected to ' + process.env.DB_NAME + ' DB!');

    database = client.db(process.env.DB_NAME);
    workoutsCollection = database.collection('workouts');
});


app.use(function timeLog(req, res, next) {
    console.log(req.method + ' ' + req.url);
    next();
  });
  
  app.get('/', (req, res) => {
    res.json({"success": true, "message": "Welcome to the aygun-workouts app. Easily and effectively track your workouts!"});
});

// Create a workout
app.post("/workout", (req, res) => { 
    workoutsCollection.insertMany(req.body, (error, result) => {
        if (error) {
            return res.status(500).send(error);
        }
        
        res.send(result.result);
    });
});

// Retrieve all workouts
app.get("/workouts", (req, res) => {
    workoutsCollection.find().toArray((error, results) => {
        if (error) {
            return res.status(500).send(error);
        }

        res.send(results);
    });
});

// Update a workout
app.put("/workout", (req, res) => { 
    workoutsCollection.updateOne({_id: new object.ObjectID(req.body.id)}, {$set: {"exercise": req.body.exercise, "weight": req.body.weight, "weight_measurement": req.body.weight_measurement, "sets": req.body.sets, "reps": req.body.reps, "rest": req.body.rest }}, {new: true}, (error, result) => {
        if (error) {
            return res.status(500).send(error);
        }
        
        res.status(res.statusCode).json({"success": true, "message": "Successfully updated workout."});
    });
});

// Delete a workout
app.delete("/workout", (req, res) => { 
    workoutsCollection.deleteOne({_id: new object.ObjectID(req.body.id)}, (error, result) => {
        console.log(req.body.id)
        if (error) {
            return res.status(500).send(error);
        }

        res.status(res.statusCode).json({"success": true, "message": "Successfully deleted workout."});
    });
});

app.listen(SERVER_PORT, () => {
    console.log('App listening on port ' + SERVER_PORT);
});