const LRU = require("lru-cache");
const cache = LRU({
  max: 500,
  maxAge: 1000 * 60 * 60,
});

cache.set("key", Math.random());
let value = cache.get("key");

console.log('value:', value);