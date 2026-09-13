import Redis from "ioredis";
import { config } from "./config";

const redis = new Redis(config.redisUrl);

redis.on("error", (err) => {
  console.error("[Redis error]:", err);
});

redis.on("connect", () => {
  console.log("[Redis] Connected successfully.");
});

export default redis;
