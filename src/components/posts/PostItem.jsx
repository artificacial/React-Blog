// src/components/posts/PostItem.jsx
import React from "react";
import PropTypes from "prop-types";
import "./PostItem.scss";

const PostItem = ({ title, url, description, pubDate, author, image }) => {
  return (
    <div className="post-item">
      <a href={url} title={title} className="group">
        <article className="h-full flex flex-col">
          <div className="image-container">
            <img className="post-image" src={image} alt={title} />
          </div>
          <div className="content-container p-4">
            <div className="header">
              <div className="meta text-xs text-gray-500">
                <span className="author">{author}</span>
                <span aria-hidden="true">&middot;</span>
                <time dateTime={pubDate}>{pubDate}</time>
              </div>
              <h2 className="title mt-2 text-lg text-black">{title}</h2>
            </div>
            <p className="description mt-4 text-sm text-gray-700">
              {description}
            </p>
          </div>
        </article>
      </a>
    </div>
  );
};

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pubDate: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PostItem;
