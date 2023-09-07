const express = require('express');
const cors = require('cors');

const magazinesData = require('./src/assets/output.json');

const app = express();

const port = process.env.API_PORT || 3001;
const appPort = process.env.SERVER_PORT || 3000;
const appOrigin = `http://localhost:${appPort}`;

app.use(cors({ origin: appOrigin }));

app.get('/api/v1/magazines', (req, res) => {
  const offset = parseInt(req.query.offset, 10);
  const limit = parseInt(req.query.limit, 10);
  const query = req.query.query;

  const data = magazinesData
    .filter(({ name }) => name.toLowerCase().includes(query))
    .slice(offset, limit + offset);

  res.send({
    data,
    previousPage: offset > 0 ? offset : null,
    nextPage: magazinesData.length > offset + limit ? offset + limit : null
  });
});

app.get('/api/v1/magazines/:id', (req, res) => {
  const id = req.params.id;
  const magazine = magazinesData.find(
    ({ name }) => name.trim().toLowerCase().split(' ').join('-') === id
  );

  if (magazine) {
    res.send(magazine);
  } else {
    res.status(404).send('Magazine not found');
  }
});

app.listen(port, () => console.log(`API Server listening on port ${port}`));
