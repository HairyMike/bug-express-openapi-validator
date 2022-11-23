const express = require('express');
const OpenApiValidator = require('express-openapi-validator');
const app = express();

app.use(
    OpenApiValidator.middleware({
      apiSpec: './openapi.yaml',
      validateRequests: true, // (default)
      validateResponses: true, // false by default
    }),
  );

app.get('/v1/test', (req, res) => {
    res.send('Hello World!')
});

const port = 3000;
app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`)
});
