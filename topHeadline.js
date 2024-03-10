import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.API_KEY;
const url = `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`;
const topHLs = process.env.ADDITIONAL_SOURCES.split(", ");

async function getTopHeadlineSrcs() {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Network response for fetch newsapi top headlines was not ok");
    }

    const data = await res.json();
    for (const src of data.sources) {
      if (src.name) topHLs.push(src.name);
    }
  } catch (error) {
    console.log(error);
  }
  return topHLs;
}

export { getTopHeadlineSrcs };
