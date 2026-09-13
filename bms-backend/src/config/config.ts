import { config as conf } from "dotenv";

const env = process.env.NODE_ENV || "development";

conf({
  path: `.env.${env}`,
});

const _config = {
  port: process.env.PORT,

  databaseUrl: process.env.MONGO_CONNECTION_STRING,

  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET as string,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET as string,
  hashingSecret: process.env.HASH_SECRET as string,

  emailUsername: process.env.NODEMAILER_EMAIL as string,
  emailPassword: process.env.NODEMAILER_PASSWORD as string,

  redisUrl: process.env.REDIS_URL as string,

  razorpayKey: process.env.RAZORPAY_API_KEY as string,
  razorpaySecret: process.env.RAZORPAY_SECRET_KEY as string,

  databaseReplicaSet: process.env.MONGO_REPLICA_STRING as string,

  frontendUrl: process.env.FRONTEND_URL as string,
};

export const config = Object.freeze(_config);
