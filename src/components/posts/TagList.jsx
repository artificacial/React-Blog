// src/components/posts/TagList.jsx
import React from "react";
import PropTypes from "prop-types";
import "./TagList.scss";

const TagList = ({ tags, onTagClick }) => {
  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <span key={index} className="tag" onClick={() => onTagClick(tag)}>
          {tag}
        </span>
      ))}
    </div>
  );
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTagClick: PropTypes.func.isRequired,
};

export default TagList;
