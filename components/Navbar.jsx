import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const router = useRouter();

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
        onClick={() => router.push("/")}
        className="w-[120px] object-contain fixed left-5 cursor-pointer"
        src="/hotflix.png"
        alt="Hotflix"
      />
      <img
        src={"profile.png"}
        alt=""
        onClick={() => router.push("/profile")}
        className="W-[40px] h-[40px] object-contain fixed right-5 cursor-pointer"
      />
 
    </div>
  );
};

export default Navbar;
