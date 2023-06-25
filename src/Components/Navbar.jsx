import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  if (user) {
    navigate("/app");
  }

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
      <Link to="/home" className="text-3xl">
        Tweeter
      </Link>
      <div className="w-36 flex justify-between">
        {user ? (
          <>
            <Link to="/me">
              <CgProfile fontSize={25} />
            </Link>
            <Link to="/" onClick={logout}>
              <FiLogOut fontSize={25} />
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
