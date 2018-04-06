const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST function to send user's task descriptions to database
router.post('/', (req, res) => {
    console.log('POST /entries route');
    let entryToAdd = req.body;
    // add user's entry data to time_tracker database under entries
    let queryText = `INSERT INTO entries (description, start_date, end_date, project_id)
                     VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [entryToAdd.description, entryToAdd.start_date, entryToAdd.end_date, entryToAdd.project_id])
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
    const queryText = `SELECT *, DATE_PART('day', end_date - start_date) * 24 + 
                       DATE_PART('hour', end_date - start_date) as total_time FROM entries
                       JOIN projects ON entries.project_id = projects.id;`;
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('ERROR - GET /entries -', error);
        res.sendStatus(500);
    }); // end pool.query
}); // end router.get

// entry DELETE request to delete from database
router.delete('/:id', (req, res) => {
    const entryId = req.params.id;
    const queryText =  `DELETE FROM entries WHERE id = $1;`;
    pool.query(queryText, [entryId]).then(result => {
        console.log('success DELETE /entries');
        res.sendStatus(200);
    }).catch(error => {
        console.log('ERROR - DELETE /entries - ', error);
        res.sendStatus(500);
    }); // end pool.query
}); // end router.delete

module.exports = router;