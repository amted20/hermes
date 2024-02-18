import dotenv from 'dotenv';
dotenv.config();

const envVarOne = process.env.USER_TOKEN;
console.log("Hello world");
console.log(`this is the env var: ${envVarOne}`);
