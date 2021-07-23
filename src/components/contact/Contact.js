import {
  SiFacebook,
  SiGmail,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";
import CopyMailTo from "react-copy-mailto";

import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <span>Connect here</span>
      <div className="contact-social">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://facebook.com/souravsingh13081999"
        >
          {" "}
          <SiFacebook className="contact-fb contact-icon" />{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/sourav1319singh"
        >
          {" "}
          <SiLinkedin className="contact-in contact-icon" />{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/sourav1319"
        >
          {" "}
          <SiGithub className="contact-gh contact-icon" />{" "}
        </a>
      </div>
      <div className="contact-mail">
        {" "}
        <SiGmail style={{ marginRight: "10px" }} />{" "}
        <CopyMailTo email="2018ugec030@nitjsr.ac.in" />
      </div>
    </div>
  );
};

export default Contact;
