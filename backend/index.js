const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.json({
    event: 'OmniStack 11.0',
    student: 'Douglas Pinheiro Goulart',
  })
});

app.listen(3333);