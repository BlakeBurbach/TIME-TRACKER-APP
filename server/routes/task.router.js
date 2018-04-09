const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST function to send user's task descriptions to database
router.post('/', (req, res) => {
    let taskToAdd = req.body;
    console.log('POST /tasks route', taskToAdd);
    // add user's task data to time_tracker database under tasks
    let queryText = `INSERT INTO tasks (description, start_date, end_date, projects_id)
                     VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [taskToAdd.description, taskToAdd.start_date, taskToAdd.end_date, taskToAdd.project_id])
    .then( (result) => {
        console.log('tasks router POST success', result);
        res.sendStatus(200);
    }).catch((err) => {
        console.log('tasks router POST error', err);
        res.sendStatus(500);
    }); // end pool.query
}); // end router.post

// GET route to get ALL tasks
router.get('/', (req, res) => {
    console.log('GET /tasks route');
    // GET request does math to find the sum of hours per each task entry
    // and makes a total_time property
    const queryText = `SELECT tasks.*, 
                       tasks.id as task_ID,
                       tasks.description as task_desc,
                       projects.client as project_client,
                       projects.id as project_ID,
                       DATE_PART('day', end_date - start_date) * 24 + 
                       DATE_PART('hour', end_date - start_date) as total_time
                       FROM tasks JOIN projects ON tasks.projects_id = projects.id;`;
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('ERROR - GET /tasks -', error);
        res.sendStatus(500);
    }); // end pool.query
}); // end router.get

// task DELETE request to delete from database
router.delete('/:id', (req, res) => {
    let taskId = req.params.id;
    const queryText =  `DELETE FROM tasks WHERE id = $1;`;
    pool.query(queryText, [taskId]).then(result => {
        console.log('success DELETE /tasks');
        res.sendStatus(200);
    }).catch(error => {
        console.log('ERROR - DELETE /tasks - ', error);
        res.sendStatus(500);
    }); // end pool.query
}); // end router.delete


module.exports = router;