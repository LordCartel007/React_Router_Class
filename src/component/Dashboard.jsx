import React from "react";
import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <h1>This is our dashboard page </h1>

      <nav>
        <ul>
          <li>
            <Link to="About">About</Link>
          </li>
          <li>
            <Link to="Contact">Contact</Link>
          </li>
          <li>
            <Link to="Help">Help</Link>
          </li>
          <li>
            <Link to="Home">Home</Link>
          </li>
        </ul>
      </nav>

      {/* Nested route content will render here */}
      <Outlet />
    </div>
  );
}

export default Dashboard;
