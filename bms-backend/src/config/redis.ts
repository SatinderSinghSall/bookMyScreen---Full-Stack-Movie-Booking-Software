import Redis from "ioredis";
import { config } from "./config";

console.log("[Redis] URL loaded:", !!config.redisUrl);

const redis = new Redis(config.redisUrl, {
  tls: {
    servername: new URL(config.redisUrl).hostname,
  },
  maxRetriesPerRequest: 3,
  enableReadyCheck: true,
});

redis.on("connect", () => {
  console.log("[Redis] Connected successfully.");
});

redis.on("ready", () => {
  console.log("[Redis] Ready successfully.");
});

redis.on("error", (err) => {
  console.error("[Redis error]:", err);
});

export default redis;
