import axios from "axios";
import { Mail } from "lucide-react";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const phoneRef = useRef(null);
  const ageRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      firstName: firstnameRef.current.value,
      lastName: lastnameRef.current.value,
      phone: phoneRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await axios.post("http://localhost:7999/signup", user, {
        withCredentials: true,
      });

      if (response.status === 200) {
        toast.success("User created successfully!");
        navigate("/interest");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="flex justify-center items-center mt-10 bg-gray-100 p-4">
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-xl">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-2">
          Welcome!
        </h2>
        <p className="text-sm text-gray-600 text-center mb-8">
          Sign up to explore!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              ref={firstnameRef}
              type="text"
              placeholder="First Name"
              required
              className="w-full h-12 px-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-700"
            />
          </div>

          <div className="mb-4">
            <input
              ref={lastnameRef}
              type="text"
              placeholder="Last Name"
              required
              className="w-full h-12 px-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-700"
            />
          </div>

          <div className="mb-4">
            <input
              ref={phoneRef}
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full h-12 px-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-700"
            />
          </div>

          <div className="mb-4">
            <input
              ref={ageRef}
              type="number"
              placeholder="Age"
              required
              className="w-full h-12 px-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-700"
            />
          </div>

          <div className="mb-4">
            <input
              ref={emailRef}
              type="email"
              placeholder="Email address"
              required
              className="w-full h-12 px-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-700"
            />
          </div>

          <div className="mb-6">
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
              className="w-full h-12 px-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-700"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300"
          >
            Sign up
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
          Already have an account?{" "}
          <Link to={"/signin"}>
            <span className="text-blue-600 cursor-pointer hover:underline">
              Sign In
            </span>
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
