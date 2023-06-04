import "./App.css";
import { Register, Login, ShowTweets, Create, Profile } from "./Pages";
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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ShowTweets />} />
          <Route path="/create" element={<Create />} />
          <Route path="/me" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
