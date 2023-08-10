import { auth } from "@/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
        signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        )
          .then((userCredential) => {
            console.log(userCredential);
          })
          .catch((error) => {
            alert(error.message);
          });
  };
  return (
    <div className="max-w-[350px] p-[70px] mx-auto bg-[rgba(0,0,0,0.85)]">
      <form action="" className="grid flex-col">
        <h2 className="font-bold text-2xl text-left mb-6">Sign In</h2>
        <input
          ref={emailRef}
          className="text-gray-900 outline-0 h-10 mb-4 rounded border-none py-[5px] px-[15px]"
          type="email"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          className="text-gray-900 outline-0 h-10 mb-4 rounded border-none py-[5px] px-[15px]"
          type="password"
          placeholder="Password"
        />
        <button
          className="py-4 px-5 text-base text-white rounded-sm bg-[#00a7e6] font-semibold border-none cursor-pointer mt-5"
          type="submit"
          onClick={signIn}
        >
          Sign In
        </button>
        <h4 className="mt-5">
          <span className="text-gray-500">New to Netflix? </span>
          <span className="cursor-pointer underline" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
