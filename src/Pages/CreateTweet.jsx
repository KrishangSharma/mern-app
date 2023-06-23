import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTweet = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const formData = new FormData();
    formData.append("content", content);

    const token = localStorage.getItem("authToken");

    const res = await axios.post(
      "https://thoughtful-lunchroom-production.up.railway.app/api/tweets/create",
      // "http://localhost:5000/api/tweets/create",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    toast.success("Tweet Created!!", {
      autoClose: 2000,
      draggable: false,
      theme: "light",
    });

    navigate("/app");
    // console.log(res);
  };

  return (
    <div className="w-full h-4/5 flex items-center justify-center">
      <div className="w-2/4 m-auto shadow-md p-3 rounded-md flex flex-col gap-4 ">
        <h2 className="text-4xl">Create a Tweet!</h2>
        <form autoComplete="off" className="w-full flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <textarea
              type="text"
              placeholder="Share with the world"
              onChange={(e) => setContent(e.target.value)}
              className="p-2 border border-black rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-2 border border-black rounded-md py-2 hover:text-white hover:bg-black"
          >
            {loading ? <span>Posting...</span> : <span>Post Tweet</span>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTweet;
