const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5436;
const projectEntryRouter = require('./routes/entry.router.js');

app.use(bodyParser.json());

app.use(express.static('server/public'));

app.use('/project_entries', projectEntryRouter);

app.listen(PORT, (req, res)=>{
    console.log(`Server running on port ${PORT}`);
});