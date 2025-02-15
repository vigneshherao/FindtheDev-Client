import React, { useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:7999/login",
        {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        },
        {
          withCredentials: true,
        }
      );
      if (result.status === 200) {
        navigate("/");
      }
      console.log("Login Successful:", result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center  mt-20 bg-gray-100 p-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">
          Welcome Back!
        </h2>
        <p className="text-sm font-semibold text-center text-gray-600 mb-8">
          Sign in to continue exploring!
        </p>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded-full p-2">
              <Mail className="text-gray-400 mx-2" />
              <input
                ref={emailRef}
                type="email"
                placeholder="Email Address"
                required
                className="w-full outline-none text-gray-700 px-2"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center border border-gray-300 rounded-full p-2">
              <Lock className="text-gray-400 mx-2" />
              <input
                ref={passwordRef}
                type="password"
                placeholder="Password"
                required
                className="w-full outline-none text-gray-700 px-2"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-sm text-gray-500">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <button className="w-full py-3 rounded-full bg-gray-100 text-gray-600 text-sm font-semibold hover:bg-gray-200 transition duration-300 flex items-center justify-center">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link to={"/signup"}>
            {" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Sign Up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
