import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-0">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" name="Home" element={<div>Home Page</div>} />
          <Route
            exact
            path="/thanks"
            name="thanks"
            element={<div>Thank you page</div>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
