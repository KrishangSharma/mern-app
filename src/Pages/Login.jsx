import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const res = await axios.post(
      "http://thoughtful-lunchroom-production.up.railway.app/api/user/login",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const token = res.data.token;
    localStorage.setItem("authToken", token);

    navigate("/app");
    window.location.reload();
    // console.log(res);
  };

  return (
    <div className="w-full h-4/5 flex items-center justify-center">
      <div className="w-2/4 m-auto shadow-md p-3 rounded-md flex flex-col gap-4 ">
        <h2 className="text-4xl">Login</h2>
        <form autoComplete="off" className="w-full flex flex-col gap-3">
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
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-black rounded-md"
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-2 border border-black rounded-md py-2 hover:text-white hover:bg-black"
          >
            Login
          </button>
          <span className="text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="underline text-blue">
              Sign Up
            </Link>{" "}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
