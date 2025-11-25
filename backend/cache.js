const LRU = require('lru-cache');

const max = parseInt(process.env.CACHE_MAX_ITEMS || '200', 10);
const ttl = parseInt(process.env.CACHE_TTL_MS || String(24*60*60*1000), 10);

const cache = new LRU.LRUCache({ max, ttl });  // <-- notice LRU.LRUCache
module.exports = cache;
