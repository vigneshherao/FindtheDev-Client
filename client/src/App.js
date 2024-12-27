import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Feeds from "./components/Feeds";
import Body from "./components/Body";

function App() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-200 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/feeds" element={<Feeds />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
