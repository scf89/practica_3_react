import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <nav>
    <NavLink 
      to="/" 
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      Home
    </NavLink>
    <NavLink 
      to="/about" 
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      About
    </NavLink>
    <NavLink 
      to="/contact/123" 
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      Contact
    </NavLink>
  </nav>
);

export default Header;
