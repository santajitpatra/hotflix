import { Footer } from "@/components";
import SignUpScreen from "@/components/SignUpScreen";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Login() {
  const [signinBtn, setSigninBtn] = useState(false);
    const router = useRouter();

  return (
    <div className="bg-gray-950">
      <div
        onClick={() => router.push("/")}
        className='relative h-[700px] lg:h-full  bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/fdf508c8-97d0-42fd-a6f9-9bef6bf96934/IN-en-20230731-popsignuptwoweeks-perspective_alpha_website_medium.jpg")] bg-no-repeat bg-center bg-cover'
      >
        <div>
          <img
            className="fixed left-0 object-contain p-5 w-40"
            src="/hotflix.png"
            alt="Hotflix"
          />
          <button
            onClick={() => setSigninBtn(true)}
            className="fixed right-5 top-5 px-5 py-3 text-xs font-semibold text-white bg-[#00a7e6] rounded-sm border-none cursor-pointer"
          >
            Sign In
          </button>
          <div className="w-full z-[1] h-[700px] lg:h-screen LOGN_BG" />
        </div>
        <div className="absolute top-[30%] z-[1] text-white left-0 right-0  mx-auto text-center p-5">
          {signinBtn ? (
            <SignUpScreen />
          ) : (
            <div className="flex-grow">
              <h1 className="text-4xl font-bold lg:text-7xl mb-4">
                Unlimited movies, TV shows and more
              </h1>
              <h2 className="text-2xl lg:text-4xl font-normal mb-4">
                Watch anywhere. Cancel anytime.
              </h2>
              <h3 className="text-base lg:text-lg font-normal">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="m-5">
                <form action="">
                  <input
                    className="p-[10px] outline-0 h-[55px] w-[30%] border-none max-w-[600px]"
                    type="email"
                    placeholder="Email address"
                  />
                  <button
                    onClick={() => setSigninBtn(true)}
                    className="py-4 px-5 text-base text-white bg-[#00a7e6] border-none "
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
