const express = require('express');
const cors = require('cors');

const magazinesData = require('./src/assets/output.json');

const app = express();

const port = process.env.API_PORT || 3001;
const appPort = process.env.SERVER_PORT || 3000;
const appOrigin = `http://localhost:${appPort}`;

app.use(cors({ origin: appOrigin }));

app.get('/api/v1/magazines', (req, res) => {
  res.send({
    data: magazinesData,
    previousPage: parseInt(req.query.offset, 10),
    nextPage: parseInt(req.query.offset, 10) + parseInt(req.query.limit, 10)
  });
});

app.listen(port, () => console.log(`API Server listening on port ${port}`));
