const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST function to send user's project entries to database
router.post('/', (req, res) => {
    console.log('POST /entries route');
    let projectToAdd = req.body;
    // add user's entry data to time_tracker database under projects
    let queryText = `INSERT INTO projects (project_description, client)
                     VALUES ($1, $2);`
    pool.query(queryText, [projectToAdd.project_description, projectToAdd.client])
    .then( (result) => {
        console.log('projects router POST success', result);
        res.sendStatus(200);
    }).catch((err) => {
        console.log('projects router POST error', err);
        res.sendStatus(500);
    }); // end pool.query
}); // end router.post

// projects GET route
router.get('/', (req, res) => {
    console.log('GET /projects route');
    const queryText = `SELECT * FROM projects;`;
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('ERROR - GET /projects -', error);
        res.sendStatus(500);
    }); // end pool.query
}); // end router.get

module.exports = router;