import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 w-full h-[60px] bg-black fixed top-0 z-[1]">
      <img
        className="w-[80px] object-contain fixed left-5"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Hotflix"
      />

      <img
        className="W-[30px] h-[30px] object-contain fixed right-5"
        src="/user1.png"
        alt="Hotflix"
      />
    </div>
  );
};

export default Navbar;
