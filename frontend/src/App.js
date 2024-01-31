import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogPage from "./components/BlogPage";
import Faqs from "./pages/Faqs";
import TrendsInSubscription from "./components/Blogs/TrendsInSubscription";
import IntroductionToSubsphere from "./components/Blogs/IntroSubsphere";
import WhatSubSphereOffering from "./components/Blogs/WhatSubSphereOffering";

function App() {
  return (
    <div className="bg-gray-0">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" name="Home" element={<Home />} />
          <Route exact path="/blogs" name="Blogs" element={<Blogs />} />
          {/* <Route path="/blogs/:id" name="Blog" element={<BlogPage/>} /> */}

          {/* single blogs routes */}
          <Route
            path="/blogs/trends-in-subscription"
            name="Blog"
            element={<TrendsInSubscription />}
          />
          <Route
            path="/blogs/introduction-to-subsphere"
            name="Blog"
            element={<IntroductionToSubsphere />}
          />
          <Route
            path="/blogs/what-subsphere-offering"
            name="Blog"
            element={<WhatSubSphereOffering />}
          />

          <Route path="/faqs" name="Faqs" element={<Faqs />} />
          <Route
            exact
            path="/thanks"
            name="thanks"
            element={<div>Thank you page</div>}
          />
          <Route path="/blogs/*" element={<Navigate to="/blogs" replace />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
