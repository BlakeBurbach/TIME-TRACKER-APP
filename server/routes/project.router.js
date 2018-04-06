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
    const queryText = `SELECT projects.id, projects.project_description, projects.client, SUM(DATE_PART('day', end_date - start_date) * 24 + 
    DATE_PART('hour', end_date - start_date)) as total_time FROM entries
    JOIN projects ON entries.projects_id = projects.id
    GROUP BY projects.id, projects.project_description, projects.client;`;
    pool.query(queryText).then(result => {
        console.log('Succes in GET /projects');
        res.send(result.rows);
    }).catch(error => {
        console.log('ERROR - GET /projects -', error);
        res.sendStatus(500);
    }); // end pool.query
}); // end router.get

// projects DELETE request to delete from database
router.delete('/:id', (req, res) => {
    const projectId = req.params.id;
    const queryText =  `DELETE FROM projects WHERE id = $1;`;
    pool.query(queryText, [projectId]).then(result => {
        console.log('success DELETE /projects');
        res.sendStatus(200);
    }).catch(error => {
        console.log('ERROR - DELETE /projects - ', error);
        res.sendStatus(500);
    })
})


module.exports = router;