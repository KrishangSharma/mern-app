import React from "react";

const Tweet = ({ content, user }) => {
  return (
    <div className=" wrap-text flex flex-col gap-2 border border-blue rounded-md p-3">
      <span className="text-md">{content}</span>
      <span className="text-md text-slate-500">By: {user}</span>
    </div>
  );
};

export default Tweet;
