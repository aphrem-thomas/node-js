'use strict';
import Express from 'express';
import Path from 'path';
import todoRouter from './routes/todo';
import bodyParser from 'body-parser';
var cors = require('cors');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = Express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(Express.static(Path.join(__dirname, 'frontend', 'build')));

app.get('/', (req:Express.Request, res:Express.Response) => {
  res.sendFile(Path.join(__dirname+'/frontend/build/index.html'));
});

app.use(todoRouter);
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});