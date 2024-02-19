import dotenv from 'dotenv';
dotenv.config();

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