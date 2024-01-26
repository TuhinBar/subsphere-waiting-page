import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogPage from "./components/BlogPage"

function App() {
  return (
    <div className="bg-gray-0">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" name="Home" element={<Home />} />
          <Route exact path="/blogs" name="Blogs" element={<Blogs/>} />
          <Route path="/blogs/:id" name="Blog" element={<BlogPage/>} />
          <Route
            exact
            path="/thanks"
            name="thanks"
            element={<div>Thank you page</div>}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
