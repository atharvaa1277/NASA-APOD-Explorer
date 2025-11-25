require('dotenv').config();
const express = require('express');
const cors = require('cors'); // <-- added for CORS
const { fetchApod } = require('./nasaClient');

const app = express();

// Add CORS middleware
app.use(cors()); // <-- allows frontend on another port to fetch
app.use(express.json());

// normalize data for frontend
function normalize(item) {
  return {
    date: item.date,
    title: item.title,
    explanation: item.explanation,
    media_type: item.media_type,
    url: item.url,
    hdurl: item.hdurl || null,
    copyright: item.copyright || 'Public Domain / NASA'
  };
}

// health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// today's APOD
app.get('/api/apod/today', async (req, res) => {
  try {
    const data = await fetchApod();
    res.json({ ok: true, payload: normalize(data) });
  } catch (err) {
    console.error(err);
    res.status(502).json({ ok: false, error: err.message });
  }
});

// APOD by date
app.get('/api/apod', async (req, res) => {
  try {
    const { date } = req.query; // optional
    const data = await fetchApod(date ? { date } : {});
    res.json({ ok: true, payload: normalize(data) });
  } catch (err) {
    console.error(err);
    res.status(502).json({ ok: false, error: err.message });
  }
});

// recent APODs
app.get('/api/apod/recent', async (req, res) => {
  try {
    const count = Math.min(parseInt(req.query.count || '10', 10), 50);
    const data = await fetchApod({ count }); // returns array
    const normalized = Array.isArray(data) ? data.map(normalize) : [normalize(data)];
    res.json({ ok: true, payload: normalized });
  } catch (err) {
    console.error(err);
    res.status(502).json({ ok: false, error: err.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API listening on http://localhost:${port}`));

module.exports = app; // useful for testing
