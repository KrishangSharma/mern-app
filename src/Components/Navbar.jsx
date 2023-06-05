import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(false);
  };

  return (
    <nav className="w-full h-20 flex items-center justify-between p-5 shadow-md">
      <Link to="/app" className="text-3xl">
        Tweeter
      </Link>
      <div className="w-52 flex justify-between">
        {user ? (
          <>
            <Link
              to="/me"
              className="items-center px-2 py-1 border border-black rounded-md hover:bg-black hover:text-white hover:border-none"
            >
              Profile
            </Link>
            <Link
              to="/"
              onClick={logout}
              className="items-center px-2 py-1 border border-black rounded-md hover:bg-black hover:text-white hover:border-none"
            >
              Log Out
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="items-center px-2 py-1 border border-black rounded-md hover:bg-black hover:text-white hover:border-none"
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="items-center px-2 py-1 border border-black rounded-md hover:bg-black hover:text-white hover:border-none"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
