import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import PostDetails from "../../components/Post-details";
import Blog1Data from "../../data/blog1.json";
import slug from "../../components/Post-details/[slug]"

const BlogDetails = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <MainLayout>
      <PageHeader
        title="post details"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "blogs", url: "/blogs" },
          { id: 3, name: "post details", url: `/blogs/${post.slug}` },
        ]}
      />
      <PostDetails />
    </MainLayout>
  );
};

export default BlogDetails;
