const express = require('express')
const app = express();
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
app.get('/healthcheck', (req, res) => res.status(200).json({status: 'ok'}));
app.get('/version', (req, res) => res.status(200).json({status: 'Version 1'}));
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
