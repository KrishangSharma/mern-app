import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const res = await axios.post(
        "https://thoughtful-lunchroom-production.up.railway.app/api/user/login",
        // "http://localhost:5000/api/user/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const token = res.data.token;
      localStorage.setItem("authToken", token);

      setLoading(false);
      navigate("/app");
      window.location.reload();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        if (response && response.data && response.data.message) {
          toast.error("Invalid Login Credentials!", {
            autoClose: 2000,
            draggable: false,
            theme: "light",
          });
        }
      } else {
        console.error(error);
      }
      setLoading(false);
    }
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
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-2 border border-black rounded-md py-2 hover:text-white hover:bg-black"
          >
            {loading ? <span>Logging In...</span> : <span>Log In</span>}
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
