const express = require('express');
const cors = require('cors');
const job = require("./corn.js");

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

job.start();
app.use(cors());

const stores = [
  {
    id: 1,
    name: 'Homerun Mart - Mumbai Central',
    address: '123 Linking Road, Bandra West, Mumbai',
    latitude: 19.0595,
    longitude: 72.8295,
  },
  {
    id: 2,
    name: 'Homerun Mart - Delhi East',
    address: '456 Laxmi Nagar, East Delhi, Delhi',
    latitude: 28.6129,
    longitude: 77.2775,
  },
  {
    id: 3,
    name: 'Homerun Mart - Bengaluru South',
    address: '789 JP Nagar 5th Phase, Bengaluru',
    latitude: 12.9063,
    longitude: 77.5856,
  },
];

app.get('/api/stores', (req, res) => {
  res.json(stores);
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
