import axios from "axios";
import { useState, useEffect } from "react";

const Profile = () => {
  const param = window.location.pathname;
  const id = param.split("/")[1];

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://thoughtful-lunchroom-production.up.railway.app/api/user/${id}`,
          // `http://localhost:5000/api/user/${id}`,
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
    <div>
      <h2>{user.name}</h2>
    </div>
  );
};

export default Profile;
