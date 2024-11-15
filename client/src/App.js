import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import Feeds from "./Feeds";
import Filters from "./Filters";
import MessageBox from "./MessageBox";
import Matches from "./Matches";

function App() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-200 min-h-screen">
      <NavBar />
      <Matches />
    </div>
  );
}

export default App;
