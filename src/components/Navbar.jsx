import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleShow(false);
      });
    };
  }, []);
  return (
    <div
      className={`flex justify-between p-5 w-full h-[60px] fixed top-0 z-[1] nav ${
        show && "nav_scroll"
      }`}
    >
      <img
        className="w-[120px] object-contain fixed left-5"
        src="/hotflix.png"
        alt="Hotflix"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="W-[30px] h-[30px] object-contain fixed right-5"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="rgb(14,165,233)"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="10" r="3" />
        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
      </svg>




    </div>
  );
};

export default Navbar;
