import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./component/About.jsx";
import Home from "./component/Home.jsx";
import Help from "./component/Help.jsx";
import Contact from "./component/Contact.jsx";
import Dashboard from "./component/Dashboard.jsx";

function App() {
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/Help">Help</Link>
      </li>
      <li>
        {" "}
        <Link to="Contact">Contact</Link>
      </li>
      <li>
        <Link to="/Dashboard">Dashboard</Link>
      </li>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/About" element={<About />} />

        <Route path="/Help" element={<Help />} />

        <Route path="/Contact" element={<Contact />} />

        <Route path="Dashboard" element={<Dashboard />}>
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Help" element={<Help />} />
          <Route path="Home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
