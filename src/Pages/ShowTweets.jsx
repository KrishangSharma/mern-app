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
          "http://thoughtful-lunchroom-production.up.railway.app/api/tweets",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setTweets(response.data.tweets);
      } catch (error) {
        console.log(error);
      }
    };
    // console.log(tweets);
    fetchTweets();
  }, []);

  return (
    <div className="flex flex-col gap-5 items-end">
      <Link
        to="/create"
        className="text-center m-6 p-3 text-2xl border rounded-md bg-black text-white hover:bg-gray-800"
      >
        Create Tweet +
      </Link>
      <div className="w-2/3 mx-auto my-5 flex gap-5 flex-wrap">
        {tweets.length > 0 ? (
          tweets.map((tweet) => (
            <Tweet
              key={tweet._id}
              content={tweet.content}
              user={tweet.user.userName}
            />
          ))
        ) : (
          <h2 className="text-3xl">Nothing to show here! Create some tweets</h2>
        )}
      </div>
    </div>
  );
};

export default ShowTweets;
