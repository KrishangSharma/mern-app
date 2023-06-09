import axios from "axios";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("userName", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    try {
      const res = await axios.post(
        "https://thoughtful-lunchroom-production.up.railway.app/api/user/register",
        // "http://localhost:5000/api/user/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("User Registered!", {
        autoClose: 2000,
        draggable: false,
        theme: "light",
      });

      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Registration failed. Please try again.");
    }
    setLoading(false);
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
            <div className="w-full flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-black rounded-md"
              />
              {showPassword ? (
                <HiOutlineEyeOff
                  onClick={handlePasswordToggle}
                  className="-mx-10"
                  fontSize={20}
                />
              ) : (
                <HiOutlineEye
                  onClick={handlePasswordToggle}
                  className="-mx-10"
                  fontSize={20}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="avatar">Choose a Profile Picture</label>
            <input
              type="file"
              id="avatar"
              onChange={(e) => setAvatar(e.target.files[0])}
              className="p-2 border border-black rounded-md"
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-2 border border-black rounded-md py-2 hover:text-white hover:bg-black"
          >
            {loading ? <span>Registering...</span> : <span>Register</span>}
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
