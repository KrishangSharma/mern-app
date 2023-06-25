import "./App.css";
import {
  Register,
  Login,
  ShowTweets,
  Create,
  Profile,
  UserProfile,
  Home,
} from "./Pages";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Components";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ToastContainer />
      <div className="w-full h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<ShowTweets />} />
          <Route path="/create" element={<Create />} />
          <Route path="/me" element={<Profile />} />
          <Route path="/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
