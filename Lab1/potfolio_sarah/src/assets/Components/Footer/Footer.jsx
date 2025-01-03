import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer id="contact" class="footer">
        <div class="footer-content">
          <p>@2025 Sarah Amr. All rights reserved.</p>
          <div class="social-icons">
            <a
              href="https://www.facebook.com/sara.amr.3532507"
              target="blank"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.linkedin.com/in/saraahamrr/"
              target="blank"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
