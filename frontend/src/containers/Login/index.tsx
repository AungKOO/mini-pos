import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <>
      <div className="flex">
        <div className="w-1/2 bg-indigo-900 h-screen"></div>
        <div className="w-1/2 bg-trueGray-50 h-screen p-20">
          <div className="flex flex-col">
            <div className="text-cente px-4 py-2 m-2">
              <p className="text-left text-3xl font-semibold">Login</p>
              <p className="text-left  text-gray-500 pt-2">
                Welcome back! Please enter your details.
              </p>
            </div>
            <div className="text-left px-4 py-2 m-2">
              <Input
                placeholder="Enter your email"
                label="Email"
                inputType="email"
                onBlur={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="text-left px-4 py-2 m-2">
              <Input
                placeholder="Enter your password"
                label="Password"
                inputType="password"
                onBlur={(e) => {
                  setPwd(e.target.value);
                }}
              />
            </div>
            <div className=" text-center px-4 py-2 m-2">
              <Button
                label="Sign in"
                onClick={() => {
                  alert(`Submit the form ${email}, ${pwd}`);
                //   to authenticate with API
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
