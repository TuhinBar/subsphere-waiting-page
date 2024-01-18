import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-gray-0">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" name="Home" element={<Home />} />
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
