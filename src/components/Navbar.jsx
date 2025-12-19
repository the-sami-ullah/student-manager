import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ background: "#333", padding: "10px", textAlign: "center" }}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/add" style={linkStyle}>
        Add Student
      </Link>
    </nav>
  );
};

const linkStyle = {
  color: "#fff",
  margin: "0 15px",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "color 0.3s",
};

export default Navbar;
