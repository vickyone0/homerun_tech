// corn.js
const axios = require('axios');
const cron = require('node-cron');

const URL = "https://homerun-tech.onrender.com/api/stores"; 

const ping = async () => {
  try {
    const response = await axios.get(URL);
    console.log(`[${new Date().toISOString()}] Ping successful:`, response.status);
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Ping failed:`, error.message);
  }
};

module.exports = {
  start: () => {
    // Run ping every 5 minutes as an example
    cron.schedule('*/5 * * * *', ping);
    console.log(" Cron job scheduled: ping every 5 minutes");
  }
};
