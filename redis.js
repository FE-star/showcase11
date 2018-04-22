const redis = require("redis");
const client = redis.createClient();


client.on("error", function(err) {
  console.log("Error " + err);
});

client.set("key", Math.random());

client.get("key", function(err, reply) {
  console.log('reply:', reply);
});