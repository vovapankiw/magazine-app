const express = require('express');
const cors = require('cors');

const magazinesData = require('./src/assets/output.json');
const countriesData = require('./src/assets/countries.json');

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

app.get('/api/v1/countries', (req, res) => {
  res.send(countriesData);
});

app.get('/api/v1/languages', (req, res) => {
  res.send([{ label: 'English' }, { label: 'German' }, { label: 'Ukrainian' }]);
});

app.get('/api/v1/frequency', (req, res) => {
  res.send([
    { label: 'weekly' },
    { label: 'monthly' },
    { label: 'bewwekly' },
    { label: 'yearly' },
    { label: '10 pre year' },
    { label: '6 per year' }
  ]);
});

app.get('/api/v1/category', (req, res) => {
  res.send([{ label: 'Sport' }, { label: 'Woman' }, { label: 'Celebrity' }]);
});

app.listen(port, () => console.log(`API Server listening on port ${port}`));
