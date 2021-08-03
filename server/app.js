const sendError = require('./middleware/sendError');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3030;

app.use(cors());
require('./mongoose');
const path = require('path'); // for the next line..
app.set('views', path.join(__dirname, 'views')); // for a non-changing views file path
app.use(express.json()); // for parsing requests body

const notesRouter = require('./routers/notesRouter');
app.use('/', notesRouter);

const usersRouter = require('./routers/usersRouter');
app.use('/users', usersRouter);

const labelsRouter = require('./routers/labelsRouter');
app.use('/', labelsRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(sendError);
app.listen(port, () => {
  console.log('Listening in port', port);
});
