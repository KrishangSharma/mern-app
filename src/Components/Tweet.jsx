import React from "react";

const Tweet = ({ content, user, name, createdAt }) => {
  const date = new Date(createdAt).toLocaleDateString("en-in", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="w-full flex flex-col gap-2 border border-blue rounded-md p-3">
      <span className="text-xl">{name}</span>
      <span className="text-md text-slate-500">@{user}</span>
      <span className="text-md">{content}</span>
      <span className="text-sm text-slate-600">{date}</span>
    </div>
  );
};

export default Tweet;
