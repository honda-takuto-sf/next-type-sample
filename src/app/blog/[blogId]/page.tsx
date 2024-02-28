import * as Blog from "@/features/blog/components/Index";
import React from 'react';

const BlogPage = () => {
  return (
  <div>
    <Blog.BlogImage />
    <Blog.BlogList />
    <Blog.BlogCard />
  </div>
  );
};

export default BlogPage;