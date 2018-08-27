const express = require('express'); //Common JS
// Same to import express from 'express'; //ES2015 modules
const db = require('./data/db');
const server = express();

// configure middleware for the server
server.use(express.json());

// configure routing(the type of middleware)
server.get('/', (req, res) => {
    res.send('Hello FSW12!');
})

server.get('/users', (req, res) => {
    db.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
        console.error('error', err);

        res.status(500).json({message: 'error getting the data'});
    });
})

// start the server
server.listen(9000, () => console.log('\n== API on port 9k ==\n'));