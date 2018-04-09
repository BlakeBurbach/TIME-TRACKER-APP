const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5436;
const taskRouter = require('./routes/task.router.js');
const projectsRouter = require('./routes/project.router.js');

app.use(bodyParser.json());

app.use(express.static('server/public'));

app.use('/tasks', taskRouter);
app.use('/projects', projectsRouter);

app.listen(PORT, (req, res)=>{
    console.log(`Server running on port ${PORT}`);
});