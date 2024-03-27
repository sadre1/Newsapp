import React from "react";
import { NewsCarausal } from "../../components/news";

const News = () => {
  return (
    <div>
      <p className="text-center text-[40px] p-2 mb-4 font-mono">
        News2Day Breaking News Articles
      </p>
      <NewsCarausal />
    </div>
  );
};

export default News;
