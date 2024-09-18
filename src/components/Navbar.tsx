import React, { FormEvent, useState } from "react";
import "../styles/navbar.css";
import { FiLogIn } from "react-icons/fi";
import { PiUserFill } from "react-icons/pi";
import logo from "../assets/main_logo.png";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(query);
  };
  return (
    <div className="main_header">
      <nav className="navbar">
        <ul className="unordered_list">
          <li>Community</li>
          <li>Books</li>
          <li>Recipe Index</li>
          <li>Popular</li>
        </ul>
        <div className="auth_links">
          <ul className="unordered_list">
            <li className="auth_items">
              <FiLogIn className="icon" />
              Register
            </li>
            <li className="auth_items">
              <PiUserFill className="icon" />
              Login
            </li>
          </ul>
        </div>
      </nav>
      <header className="sub_header">
        <div className="logo_img">
          <img src={logo} alt="Logo_image" />
        </div>
        <div className="search_input">
          <SearchInput
            query={query}
            setQuery={setQuery}
            handleSubmit={handleSubmit}
          />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
