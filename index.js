const { resolveNaptr } = require('dns');
const express = require('express');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;

const app = express();
let db;
const url = "mongodb://localhost:27017/";

// Initalize the connection
MongoClient.connect(
    url, { useNewUrlParser: true, 
    useUnifiedTopology: true }, (err, database) => {
        if (err) throw err;
        db = database.db("todolist");
});

app.get("/", (req, res, next) => {
    // db.collection("users").find({}, (err, users) => {
    // });
    fs.readFile('home.html', (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
    });
});

app.get("/todolist", (req, res, next) => {
    fs.readFile('index.html', (err, data) => {
        res.write(data);
        res.end();
    });
});

app.post("/create", (req, res, next) => {
    console.log("To create a new TODO");
});

app.put("/items/:id", (req, res, next) => {
    console.log("Update the items with id given");
});

app.delete("/items/:id", (req, res, next) => {
    console.log("Delete the items");
});


app.listen(8000);
console.log(`Listening to port 8000`);