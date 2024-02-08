const express = require('express');
const app = express();
app.use(express.json());

const port = 3000

app.get('/', (request, response) => {
  const ip = 
    request.headers['x-real-ip'] || 
    request.headers['x-forwarded-for'] || 
    request.socket.remoteAddress || '';

  return response.json({
    ip,
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})