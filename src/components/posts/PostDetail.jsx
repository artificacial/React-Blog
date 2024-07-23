import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PostDetail.scss";

const PostDetail = ({ posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.id.toString() === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="post-detail container mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="back-button mb-4">
        Volver
      </button>
      <img
        className="post-image"
        style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
        src={post.image}
        alt={post.title}
      />
      <h1 className="post-title text-3xl font-bold mt-4">{post.title}</h1>
      <p className="post-author text-gray-600 mt-2">by {post.author}</p>
      <time className="post-date text-gray-400">{post.pubDate}</time>
      <div className="post-content mt-4">
        <p>{post.content}</p>
      </div>
      <div className="post-tags mt-4">
        {post.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
