// import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './Footer.css';

function Footer() {
  return (
    
      <footer className="footer">
        <ul>
          <a href="https://github.com/Esztergb" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/eszter-barbuscia-638ab763/" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>
         </ul>
      </footer>

  );
}

export default Footer;
