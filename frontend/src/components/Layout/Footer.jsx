import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By LAVISH ATREY.</div>
      <div>
        <Link to={"https://github.com/lavishatrey"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://www.linkedin.com/in/lavish-atrey-01744a250/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/atreylavish/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
