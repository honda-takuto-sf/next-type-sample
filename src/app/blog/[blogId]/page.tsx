import * as Blog from "@/features/blog/components/index";

const BlogPage = () => {
  return (
  <>
    <Blog.BlogImage />
    <Blog.BlogList />
    <Blog.BlogCard />
  </>
  );
};

export default BlogPage;