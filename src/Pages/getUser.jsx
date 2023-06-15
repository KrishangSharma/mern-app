import { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

const GetUser = () => {
  const token = localStorage.getItem("authToken");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        const response = await axios.get(
          // `https://thoughtful-lunchroom-production.up.railway.app/api/user/${userId}`,
          `http://localhost:5000/api/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data.user);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      {loading ? (
        <h2 className="text-xl">Fetching User Data...</h2>
      ) : (
        <div className="flex h-3/4 w-full justify-center items-center">
          <div className="w-3/4 p-5 flex flex-col gap-5">
            <h1 className="text-4xl mb-5">My Profile</h1>

            <div className="w-100 flex flex-col gap-1">
              <span className="text-2xl w-100 p-2 text-slate-600">Name</span>
              <span className="text-2xl w-100 p-2 border rounded-md">
                {user.name}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-2xl w-100 p-2 text-slate-600">
                Username
              </span>
              <span className="text-2xl w-100 p-2 border rounded-md">
                {user.userName}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-2xl w-100 p-2 text-slate-600">Email</span>
              <span className="text-2xl w-100 p-2 border rounded-md">
                {user.email}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GetUser;
