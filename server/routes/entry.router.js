const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST function to send user's project entries to database
router.post('/', (req, res) => {
    let entryToAdd = req.body;
    // add user's entry data to time_tracker database under project_entries
    let queryText = `INSERT INTO project_entries (description, start_date, end_date)
                     VALUES ($1, $2, $3);`
    pool.query(queryText, [entryToAdd.description, entryToAdd.start_date, entryToAdd.end_date])
    .then( (result) => {
        console.log('project_entry router POST success', result);
        res.sendStatus(200);
    }).catch((err) => {
        console.log('project_entry router POST error', err);
        res.sendStatus(500);
    }); // end pool.query
}); // end router.post

module.exports = router;