import mongoose from "mongoose";

const articleSchema = mongoose.Schema(
  {
    source: {
      type: {
        id: String,
        name: String,
      },
    },
    author: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    url: {
      type: String,
    },
    urlToImage: {
      type: String,
    },
    publishedAt: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Article = mongoose.model("Article", articleSchema);
export default Article;
