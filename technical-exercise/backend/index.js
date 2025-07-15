const express = require('express');
const cors = require('cors');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(cors());

const stores = [
  {
    id: 1,
    name: 'Homerun Mart - Central',
    address: '123 Main Street, Springfield',
    latitude: 37.7749,
    longitude: -122.4194,
  },
  {
    id: 2,
    name: 'Homerun Mart - East',
    address: '456 East Ave, Springfield',
    latitude: 37.7849,
    longitude: -122.4094,
  },
  {
    id: 3,
    name: 'Homerun Mart - West',
    address: '789 West Blvd, Springfield',
    latitude: 37.7649,
    longitude: -122.4294,
  },
];

app.get('/api/stores', (req, res) => {
  res.json(stores);
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
