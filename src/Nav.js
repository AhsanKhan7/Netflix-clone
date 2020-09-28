import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://lh3.googleusercontent.com/proxy/yBoHCSTCBlPHi_cgZlX_dVAlO4Lsc9N1CtiBdbbt8y6ALCNP9TKYf2qNMsRk5rZM4WNJEjvMEyRdhYzfswUJtdaz4yovN9pm1LZMsrFtFNzp-6090hI"
        alt="Netflix logo"
      />
      <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/2d/0f/50/2d0f50e8e4f6b233c7cf70b4bd36f89c.png"
        alt="avatar logo"
      />
    </div>
  );
}

export default Nav;
