import axios from "axios";
import { Link } from "react-router-dom";
import { Tweet } from "../Components/";
import { useEffect, useState } from "react";

const ShowTweets = () => {
  const token = localStorage.getItem("authToken");
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get(
          "https://thoughtful-lunchroom-production.up.railway.app/api/tweets",
          // "http://localhost:5000/api/tweets",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(response.data.tweets);
        setTweets(response.data.tweets.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    fetchTweets();
  }, []);

  return (
    <div className="w-2/3 m-auto flex flex-col gap-5">
      <div className="w-100 flex justify-between items-center">
        <h1 className="text-3xl">Currently Happening...</h1>
        <Link
          to="/create"
          className="m-6 p-3 text-xl border rounded-md bg-black text-white hover:bg-gray-800"
        >
          Create Tweet +
        </Link>
      </div>
      <div className="w-full mx-auto my-5 flex flex-col gap-5">
        {tweets.length === 0 ? (
          <h2 className="text-3xl">Nothing to show! Create Some Tweets</h2>
        ) : (
          tweets.map((tweet) => (
            <Tweet
              key={tweet._id}
              content={tweet.content}
              user={tweet.user.userName}
              name={tweet.user.name}
              avatar={tweet.user.avatar}
              userId={tweet.user._id}
              createdAt={tweet.createdAt}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ShowTweets;
