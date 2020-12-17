import React from "react";
import { Link } from "react-router-dom";

// Menu List
import { menuList } from "./config/menu";

// General Styles
import "../ui/style.css";

const Header = () => {
  const items = menuList;
  return (
    <header className="header">
      <ul className="main_menu">
        {items &&
          items.map((item, key) => (
            <li key={key}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
      </ul>
    </header>
  );
};

export default Header;
