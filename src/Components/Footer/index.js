import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import './footer.css'
const Footer = () => {
  return (
    <>
      <div className="footer">
        <h3> @ Jestor Nogueiro</h3>

        <a href="https://www.facebook.com/jestor.nogueiro/" target="_blank"
        alt='facebooF'
        >
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/jestor_nogueiro/" target="_blank" alt='instagram'>
          
          <FaInstagram />
        </a>
        <a 
          href="https://www.linkedin.com/in/jestor-nogueiro-02467b184/"
          target="_blank"
          alt='LinkedIn'
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/JestorNogueiro" target="_blank"
        alt='GitHub'
        rel=''
        >
          <FaGithub />
        </a>
        
      </div>
    </>
  );
};

export default Footer;
