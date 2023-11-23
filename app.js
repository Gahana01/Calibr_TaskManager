const fs= require('fs');
const express= require('express');
const morgan= require('morgan');
//const bodyParser= require('body-parser');

const taskRouter = require('./routes/taskRoute');

const app= express();

///Middlewares///
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//app.use(bodyParser.json());
app.use(express.json());
//app.use(express.static(`${__dirname}/public`));

//const tasks= JSON.parse(fs.readFileSync(`${__dirname}/tasklist.json`));
//console.log(tasks);

//In-memory data store for tasks
//let tasks= [];

///Routes///
app.use(taskRouter);

//Start the server
const port= 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports= app;
