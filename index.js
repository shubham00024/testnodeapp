const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;

app.set('trust proxy', true);
app.use(cors());

app.get('/', (request, response) => {
  const ip = request.ip;
  response.send(ip);
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})