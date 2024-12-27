import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Feeds from "./components/Feeds";
import Body from "./components/Body";
import Matches from "./components/Matches";
import Inbox from "./components/MessageBox";

function App() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-200 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feeds />} />
            <Route path="/feeds" element={<Feeds />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/inbox" element={<Inbox />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
