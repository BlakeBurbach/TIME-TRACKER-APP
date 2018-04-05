const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST function to send user's project entries to database
router.post('/', (req, res) => {
    console.log('POST /entries route');
    let entryToAdd = req.body;
    // add user's entry data to time_tracker database under project_entries
    let queryText = `INSERT INTO entries (description, start_date, end_date)
                     VALUES ($1, $2, $3);`
    pool.query(queryText, [entryToAdd.description, entryToAdd.start_date, entryToAdd.end_date])
    .then( (result) => {
        console.log('entries router POST success', result);
        res.sendStatus(200);
    }).catch((err) => {
        console.log('entries router POST error', err);
        res.sendStatus(500);
    }); // end pool.query
}); // end router.post

// entries GET route
router.get('/', (req, res) => {
    console.log('GET /entries route');
    const queryText = `SELECT * FROM entries;`;
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('ERROR - GET /entries -', error);
        res.sendStatus(500);
    }); // end pool.query
}); // end router.get

module.exports = router;