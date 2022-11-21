import React from "react";

const Footer = () => {
  return (
    <footer id="Footer" className="bg-secondary p-3 d-flex justify-content-around">
      <small className="text-light rounded bg-secondary p-2 font-weight-bold">German Caicedo \ Pre entrega 1 \ copyright Coderhouse</small>
      <div className="bg-light rounded">
        <a href="https://github.com/germanCaiced6" className="p-2">GitHub <img src="../images/github.svg"/></a>
        <a href="https://github.com/germanCaiced6" className="p-2">LinkedIn <img src="../images/linkedin.svg"/></a>
      </div>
    </footer>
  );
}

export default Footer;