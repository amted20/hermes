import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.API_KEY;
const url = `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`;
const srcs = process.env.ADDITIONAL_SOURCES;
console.log(`type of and val: ${typeof srcs} - ${srcs}`);
const topHLs = srcs.split(":");


for (let i of topHLs)
  console.log(`top headlines test: ${i}`)

// async function getTopHeadlineSrcs() {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) {
//       throw new Error("Network response for fetch newsapi top headlines was not ok");
//     }

//     const data = await res.json();
//     for (const src of data.sources) {
//       if (src.name) topHLs.push(src.name);
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   return topHLs;
// }

// export { getTopHeadlineSrcs };
