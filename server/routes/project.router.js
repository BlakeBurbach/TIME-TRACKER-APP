const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST function to send user's project entries to database
router.post('/', (req, res) => {
    console.log('POST /projects route');
    let projectToAdd = req.body;
    // add user's project data to time_tracker database under projects
    let queryText = `INSERT INTO projects (project_description, client, hourly_rate)
                     VALUES ($1, $2, $3);`
    pool.query(queryText, [projectToAdd.project_description, projectToAdd.client, projectToAdd.hourly_rate])
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
    // Query to get back all projects with now calculated total_time,
    // total_earnings from all task data
    const queryText = `SELECT SUM(COALESCE((DATE_PART('day', end_date - start_date) * 24 + 
    DATE_PART('hour', end_date - start_date)),0)) as total_time,
    SUM(COALESCE((DATE_PART('day', end_date - start_date) * 24 + 
    DATE_PART('hour', end_date - start_date)),0)* projects.hourly_rate) as total_earnings,
    projects.client, projects.id, 
    projects.project_description, projects.hourly_rate
    FROM projects LEFT JOIN tasks ON projects.id = tasks.projects_id
    GROUP BY projects.id, projects.client, projects.project_description, projects.hourly_rate
    ORDER BY id ASC;`;
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
    }) // end pool.query
}) // end router.delete


module.exports = router;