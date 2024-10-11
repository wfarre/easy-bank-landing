import React from "react";
import ArticleCard from "../../Cards/ArticleCard";

const articles = [
  {
    title: "Receive money in any currency with no fees",
    author: "Claire Robinson",
    content:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    picture: "/assets/images/image-currency.jpg",
  },
  {
    title: "Treat yourself without worrying about money",
    author: "Wilson Hutton",
    content:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    picture: "/assets/images/image-restaurant.jpg",
  },
  {
    title: "Take your Easybank card wherever you go",
    author: "Wilson Hutton",
    content:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    picture: "/assets/images/image-plane.jpg",
  },
  {
    title: "Our invite-only Beta accounts are now live!",
    author: "Claire Robinson",
    content:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    picture: "/assets/images/image-confetti.jpg",
  },
];

const ArticlesSection = () => {
  return (
    <section className="px-6 pb-20 pt-24 lg:px-40" id="articles">
      <h2 className="text-dark-blue mb-12 text-4xl">Latest Articles</h2>
      <ul className="flex flex-wrap justify-between gap-3">
        {articles.map((article) => (
          <ArticleCard
            title={article.title}
            content={article.content}
            author={article.author}
            picture={article.picture}
          />
        ))}
      </ul>
    </section>
  );
};

export default ArticlesSection;
