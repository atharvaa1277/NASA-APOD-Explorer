require('dotenv').config();
const cache = require('./cache');

const BASE = 'https://api.nasa.gov/planetary/apod';
const API_KEY = process.env.NASA_API_KEY || 'DEMO_KEY';

async function fetchApod(params = {}) {
  const qs = new URLSearchParams({ api_key: API_KEY, ...params }).toString();
  const url = `${BASE}?${qs}`;

  const cached = cache.get(url);
  if (cached) return cached;

  const res = await fetch(url); // <- use global fetch
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`NASA API error ${res.status}: ${text}`);
  }
  const data = await res.json();
  cache.set(url, data);
  return data;
}

module.exports = { fetchApod };
