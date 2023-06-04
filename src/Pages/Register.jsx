import axios from "axios";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("userName", username);
    formData.append("email", email);
    formData.append("password", password);

    const res = await axios.post(
      "https://thoughtful-lunchroom-production.up.railway.app/api/user/register",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    toast("User Registered!", {
      autoClose: 2000,
      draggable: false,
      theme: "light",
    });

    navigate("/login");
    // console.log(res);
  };

  return (
    <div className="w-full h-4/5 flex items-center justify-center">
      <div className="w-2/4 m-auto shadow-md p-3 rounded-md flex flex-col gap-4 ">
        <h2 className="text-4xl">Register</h2>
        <form autoComplete="off" className="w-full flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              className="p-2 border border-black rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your desired username"
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 border border-black rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-black rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create your password"
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-black rounded-md"
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-2 border border-black rounded-md py-2 hover:text-white hover:bg-black"
          >
            Register
          </button>
          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline text-blue">
              Log In
            </Link>{" "}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
