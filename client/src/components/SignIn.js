import React, { useRef } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-200 pt-10">
      <div className="bg-white w-full max-w-sm border border-gray-300 p-6 shadow-md">
        <div className="flex justify-center mb-6">
          <h2 className="font-bold">EXPAORE</h2>
        </div>
        <h2 className="text-xl font-bold text-center mb-6">SIGN UP</h2>

        <form>
          <div className="relative mb-2">
            <input
              ref={nameRef}
              className="w-full h-10 mb-4 p-2 border border-gray-300 rounded-md"
              type="text"
              placeholder="Name"
            />
          </div>

          <div className="relative mb-2">
            <input
              ref={emailRef}
              className="w-full h-10 mb-4 p-2 border border-gray-300 rounded-md"
              type="email"
              placeholder="Email address"
            />
          </div>

          <div className="relative mb-4">
            <input
              ref={passwordRef}
              className="w-full h-10 mb-4 p-2 border border-gray-300 rounded-md"
              type="password"
              placeholder="Password"
            />
          </div>

          <button className="w-full h-10 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600">
            SUBMIT
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <p className="text-center text-gray-600 mt-6">
          Already having an account?
          <button className="text-black hover:underline font-bold cursor-pointer">
            SignIn
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
