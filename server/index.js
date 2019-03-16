// This file doesn't go through babel or webpack transformation.
const port = parseInt(process.env.PORT, 10) || 3000;

const express = require('express');
const next = require('next');
const { parse } = require('url');

const server = express();
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
  dir: './src',
});

const handle = app.getRequestHandler();
console.log('server');
app.prepare().then(() => {
  server
    .get('*', (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
});
