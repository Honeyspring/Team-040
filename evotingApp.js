/* eslint-disable import/no-extraneous-dependencies */
const { createProxyMiddleware } = require('http-proxy-middleware');
const Bundler = require('parcel-bundler');
const express = require('express');

const bundler = new Bundler('src/public/index.html');
const app = express();
app.use(createProxyMiddleware('/api', { target: 'https://sdg-team-40.herokuapp.com', pathRewrite:{'^/api': ''}, changeOrigin: true}));
app.use(bundler.middleware());

app.listen(1234, () => console.log('http://localhost:1234'));
