import React from "react";
const Login = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/2 bg-indigo-900 h-screen"></div>
        <div className="w-1/2 bg-trueGray-50 h-screen p-30">
          <div className="flex flex-col">
            <div className="text-cente px-4 py-2 m-2">
              <p className="text-left text-3xl font-semibold">Login</p>
              <p className="text-left  text-gray-500 pt-2">
                Welcome back! Please enter your details.{" "}
              </p>
            </div>
            <div className="text-left px-4 py-2 m-2">
              <p>Email: </p>
              <input
                type="text"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="text-left px-4 py-2 m-2">
              <p>Password: </p>
              <input
                type="text"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="pwd"
                placeholder="Password"
              />
            </div>
            <div className=" text-center px-4 py-2 m-2">
              <button className="text-white font-bold py-2 px-4 rounded bg-blue-800 hover:bg-blue-600 w-full">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
