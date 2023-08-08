import React from "react";

function Login() {
  return (
    <div className='relative h-full bg-[url("https://images.unsplash.com/photo-1611784237648-eeb9be60c61d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80")] bg-no-repeat bg-center bg-cover'>
      <div>
        <img
          className="fixed left-0 object-contain p-5 w-40"
          src="/hotflix.png"
          alt="Hotflix"
        />
        <button className="fixed right-5 top-5 px-5 py-3 text-xs font-semibold text-white bg-blue-400 border-none cursor-pointer">
          Sign In
        </button>
        <div className="w-full z-[1] h-screen LOGN_BG" />
      </div>
      <div className="absolute top-[30%] z-[1] text-white text-7xl ml-auto mr-auto text-center p-5">
        <h2>Unlimited films ,TV programmes and more. </h2>
      </div>
    </div>
  );
}

export default Login;
