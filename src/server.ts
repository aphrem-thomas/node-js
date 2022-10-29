'use strict';
import Express from 'express';
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = Express();
app.get('/', (req:Express.Request, res:Express.Response) => {
  res.send('Hello World');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});