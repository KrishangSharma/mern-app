import React from "react";
import { Link } from "react-router-dom";

const Tweet = ({ content, user, name, createdAt, userId, avatar }) => {
  const date = new Date(createdAt).toLocaleDateString("en-in", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="w-full border border-blue rounded-md p-3">
      <div className="w-full flex gap-3 items-start">
        <div className="w-14 h-14 overflow-hidden rounded-full flex-shrink-0">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col">
            <span className="text-xl">{name}</span>
            <Link to={`/${userId}`} className="text-sm text-gray-400 w-min">
              {`@${user}`}
            </Link>
          </div>
          <p className="text-gray-600">{content}</p>
          <span className="text-sm text-gray-400">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
