import React from "react";
import { Link } from "react-router-dom";
import "./PostItem.scss";

const PostItem = ({
  id,
  title,
  url,
  description,
  pubDate,
  author,
  image,
  tags,
}) => {
  return (
    <li>
      <Link to={`/post/${id}`} title={title} className="group">
        <article className="flex-1 h-full flex flex-col">
          <div className="block w-full lg:col-span-2">
            <img
              className="aspect-[2/3] object-cover bg-center h-full w-full"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex flex-col items-start justify-between h-full flex-1 w-full p-4">
            <div>
              <div className="inline-flex space-x-1 items-center">
                <p className="text-xs font-medium text-black">{author}</p>
                <span aria-hidden="true">&middot;</span>
                <div className="flex text-xs text-zinc-400">
                  <time dateTime={pubDate}>{pubDate}</time>
                </div>
              </div>
              <p className="text-black mt-2 font-display text-xl text-pretty">
                {title}
              </p>
            </div>
            <p className="mt-4 text-sm text-zinc-500 line-clamp-2">
              {description}
            </p>
            <div className="mt-4 flex space-x-2">
              {tags.map((tag, index) => (
                <span key={index} className="text-xs font-medium text-black">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default PostItem;
