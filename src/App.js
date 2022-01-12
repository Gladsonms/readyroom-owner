import "./App.css";
import { Sigin, Signup, NoMatch } from "./Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages";
//import { Signup } from "./Pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Sigin />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
