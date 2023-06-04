import { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

const GetUser = () => {
  const token = localStorage.getItem("authToken");
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        console.log(userId);

        const response = await axios.get(
          `http://thoughtful-lunchroom-production.up.railway.app/api/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data.user);
        console.log(response.data.user);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="flex h-3/4 w-full items-center justify-center">
      <div className="border rounded-md shadow-md p-2">
        <h5 class="mb-2 text-2xl tracking-tight text-gray-900">
          Name: {user.name}
        </h5>
        <h5 class="text-2xl mb-2 text-gray-700">Username: {user.userName}</h5>
        <h5 class="text-2xl mb-2 text-gray-700">Email: {user.email}</h5>
      </div>
    </div>
  );
};

export default GetUser;
