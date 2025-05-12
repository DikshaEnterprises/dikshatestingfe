import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./Blog"; // Import blog posts data

function BlogPostDetail() {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div className="text-center py-16">Post not found.</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Blog Header */}
      <section className="bg-[#f3f4f6] text-gray py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl md:text-2xl leading-relaxed">{post.date}</p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#ea5430] mb-4">{post.title}</h2>
            <p className="text-gray-700 text-lg mb-6">{post.content}</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default BlogPostDetail;
