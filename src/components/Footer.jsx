// import React from "react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-div">
      <footer>
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
    </div>
  );
}

export default Footer;
