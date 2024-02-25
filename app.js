import dotenv from 'dotenv';
dotenv.config();

// import mongoose from 'mongoose';
// import Item from './itemModel.js';


const envVarOne = process.env.USER_TOKEN;
console.log("Hello world");
console.log(`this is the env var: ${envVarOne}`);
console.log(`Current Node.js version: ${process.version}`)

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      // If the response is not 2xx, it will throw an error
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
  }
}

fetchData();

// async function createItem() {
//     const item = await Item.create({
//         name: "dan",
//         resource: "reporter_one"
//     });
//     console.log(item)
// }

// const DB_USERNAME = process.env.DB_USERNAME 
// const DB_PASSWORD = process.env.DB_PASSWORD 
// const DB_NAME = process.env.DB_NAME

// const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster01.vyci9s3.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

// async function connect() {
//     try {
//         await mongoose.connect(uri);
//         console.log("connected to MongoDB");
//         await createItem();
//     } catch (error) {
//         console.error(error)
//     } finally {
//         console.log("closing db connection.")
//         await mongoose.disconnect();
//         console.log('Disconnected from database');
//     }
// }

// connect();