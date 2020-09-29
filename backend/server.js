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

app.use((req, res, next) => { // Middleware for setting necessary CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
    next();
});

var database, workoutsCollection;

mongoClient.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        throw error;
    }

    console.log('Connected to ' + process.env.DB_NAME + ' DB!');

    database = client.db(process.env.DB_NAME);
    workoutsCollection = database.collection('workouts');
});

var errorHandler = (res, error) => {
    if (error) {
        return res.status(500).send(error);
    }
};


app.use((req, res, next) => { // Middleware to log request
    console.log(req.method + ' ' + req.url);
    next();
});

app.get('/', (req, res) => {
    res.json({ "success": true, "message": "Welcome to the aygun-workouts app. Easily and effectively track your workouts!" });
});

// Create a workout
app.post("/workout", (req, res) => {
    workoutsCollection.insertMany(req.body, (error, result) => {
        errorHandler(res, error);

        res.send(result.result);
    });
});

// Retrieve all workouts
app.get("/workouts", (req, res) => {
    workoutsCollection.find().toArray((error, results) => {
        errorHandler(error);

        res.send(results);
    });
});

// Update a workout
app.put("/workout", (req, res) => {
    workoutsCollection.updateOne({ _id: new object.ObjectID(req.body.id) }, { $set: { "exercise": req.body.exercise, "weight": req.body.weight, "weight_measurement": req.body.weightMeasurement, "sets": req.body.sets, "reps": req.body.reps, "rest": req.body.rest } }, { new: true }, (error, result) => {
        errorHandler(error);

        res.json({ "success": true, "message": "Successfully updated workout." });
    });
});

// Delete a workout
app.delete("/workout", (req, res) => {
    workoutsCollection.deleteOne({ _id: new object.ObjectID(req.body.id) }, (error, result) => {
        errorHandler(error);

        res.json({ "success": true, "message": "Successfully deleted workout." });
    });
});

app.listen(SERVER_PORT, () => {
    console.log('App listening on port ' + SERVER_PORT);
});