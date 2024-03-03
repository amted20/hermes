import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import Article from "./articleModel.js";
import sendEmail from "./email.js";
import { getTopHeadlineSrcs } from "./topHeadline.js";

const getEverythingNews = async () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const formattedDate = yesterday.toISOString().split("T")[0];

  const apiKey = process.env.API_KEY;
  const keyWords = process.env.KEY_WORDS;
  const url = `https://newsapi.org/v2/everything?q=${keyWords}&from=${formattedDate}&sortBy=popularity&apiKey=${apiKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Network response for fetch newsapi was not ok");
    }
    const data = await res.json();
    const totalResults = data["totalResults"];
    console.log(`Total: ${totalResults}`);

    const articles = data["articles"];
    if (articles.length) {
      const linkList = [];
      const topHeadlineSrcs = await getTopHeadlineSrcs();
      for (const article of articles) {
        const news = {
          source: article["source"],
          author: article["author"],
          title: article["title"],
          description: article["description"],
          url: article["url"],
          urlToImage: article["urlToImage"],
          publishedAt: article["publishedAt"],
          content: article["content"],
        };

        if (topHeadlineSrcs.includes(news.source.name)) {
          linkList.push({
            sourceName: news.source.name,
            title: news.title,
            url: news.url
          });
        }
        await createItem(news);
      }

      if (linkList.length) {
        sendEmail(linkList)
      }
    }
  } catch (error) {
    console.error(`Error while fetching data: ${error}`);
  }
};

async function createItem(news) {
  const item = await Article.create(news);
}

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster01.vyci9s3.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to DB");
    await getEverythingNews();
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Closing db connection.");
    await mongoose.disconnect();
    console.log("Disconnected from database");
  }
}

connect();
