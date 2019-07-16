const express         = require('express');
const mongoClient     = require('mongodb').MongoClient;
const bodyParser      = require('body-parser');

const app   = express();
const db    = require('./config/db');
const dbPort = 8081

app.use(bodyParser.urlencoded({ extended: false }))

//var url = "mongodb+srv://jhoelccari:sd6CsvVWVvQDmr6O@cluster0-gmk8b.mongodb.net/todo-db?retryWrites=true&w=majority";

const client = new mongoClient( db.dburl() , { useNewUrlParser: true });

client.connect(err => {
    if (err) return console.log(err)
    const database = client.db("todo-list");
    // perform actions on the collection object
    require('./app/todo-routes')(app, database);
    app.listen(dbPort, ()=>{
        console.log("[MongoDB] Listen on "+ dbPort +" port");
    })
});

