import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Feeds from "./components/Feeds";
import Body from "./components/Body";
import Matches from "./components/Matches";
import Inbox from "./components/MessageBox";
import SignUp from "./components/SignUp";
import Interest from "./components/Interest";

function App() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-200">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feeds />} />
            <Route path="/feeds" element={<Feeds />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/inbox" element={<Inbox />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/interest" element={<Interest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
