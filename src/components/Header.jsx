import { Link } from "react-router-dom";
import { useState } from "react";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div className="topHeader">
        <a href="mailto:info@chepsaitasportslimited.co.ke">
          info@chepsaitasportslimited.co.ke
        </a>
        <a href="tel:+254202600171">0202600171</a>
      </div>
      <div className="mainHeader">
        <div className="logo">
          <img src="/logo.jpeg" alt="Chepsaita Sports Limited Logo" />
        </div>
        <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
        <nav className={`navMenu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
