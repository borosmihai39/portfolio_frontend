import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://github.com/borosmihai39"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsGithub />
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/mihai-boros-260138183/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <FaLinkedin />
        </div>
      </a>

      <a
        href="https://www.facebook.com/euphemismal/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <FaFacebookF />
        </div>
      </a>

      <a
        href="https://www.instagram.com/borosmihai/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
