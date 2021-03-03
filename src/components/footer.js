import React from 'react'

import resume from "../assets/Garrett Steed Resume 2020.pdf";

function Footer() {
    return (
        <footer>
        <a href="https://github.com/gsteed1677" target="blank">
          Github
        </a>
        <br />
        <a href={resume} target="blank">
          Resume
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/garrett-steed/"
          target="blank"
        >
          LinkedIn
        </a>
      </footer>
    )
}

export default Footer;
