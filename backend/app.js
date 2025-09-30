const express = require('express');
const homePage = require('./pages/home');
const servicesPage = require('./pages/services');
const contactPage = require('./pages/contact');
const app = express();
require("dotenv").config();
const port = process.env.PORT ;

// Middleware working hours
app.use((req, res, next) => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  if (day >=1 && day <=5 && hour>=9 && hour<17) next();
  else res.send('<h1>Website available Mon-Fri 9-17 only</h1>');
});

// Routes
app.get('/', (req, res) => res.send(homePage()));
app.get('/services', (req, res) => res.send(servicesPage()));
app.get('/contact', (req, res) => res.send(contactPage()));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
