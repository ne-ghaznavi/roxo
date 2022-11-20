import React from "react";

// components
import { Header } from "../components";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

function Login() {
  return (
    <>
      <Header />
      <div className="bg-[#f4f4f4] py-12">
        <div className="bg-white mx-auto py-9 px-12 rounded-[30px] w-5/6 max-w-[1000px] md:flex md:justify-between">
          <LoginForm />
          <div className="hidden md:block w-[1px] bg-[#ccc]"></div>
          <RegisterForm />
        </div>
      </div>
    </>
  );
}

export default Login;
