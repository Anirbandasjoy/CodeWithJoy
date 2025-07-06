import MaxWidth from "@/components/shared/maxWidth";
import ArticlePreview from "@/utils/ArticlePreview";
import React from "react";

const articleLinks = [
  "https://github.com/Anirbandasjoy/multiple-github-account-setup",
  "https://medium.com/coders-capsule/getting-started-with-backend-development-8ce55585e860",
];

const ArticlesPage = () => {
  return (
    <MaxWidth className="px-4 lg:px-0 sm:my-15 my-5">
      <h1 className="text-3xl font-semibold text-gray-800 mb-2">Articles</h1>

      {/* Subtitle added here */}
      <p className="text-gray-600 mb-6 max-w-xl">
        Here are some of my latest articles and tutorials covering web
        development and related technologies.
      </p>

      <div className="flex gap-4 flex-wrap">
        {articleLinks.map((url) => (
          <ArticlePreview key={url} url={url} />
        ))}
      </div>
    </MaxWidth>
  );
};

export default ArticlesPage;
