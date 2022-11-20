import React, { useState } from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/user/userSlice";

import loginLogo from "../assets/images/login.svg";

// Components
import { RememberForm } from ".";

const LoginForm = () => {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rememberPassword, setRememberPassword] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.userName) {
      errors.userName = "نام کاربری را وارد کنید";
    } else if (values.userName.length !== 11) {
      errors.userName = "شماره موبایل وارد شده نادرست است";
    }

    if (!values.password) {
      errors.password = "رمز عبور خود را وارد کنید";
    } else if (values.password.length < 5) {
      errors.password = "رمز عبور حداقل باید شامل 5 کاراکتر باشد";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      if (
        values.userName == userState.mobile &&
        values.password == userState.password
      ) {
        dispatch(login(true))
        navigate("/");
      }
    },
  });

  const rememberPasswordHandler = () => {
    setRememberPassword(!rememberPassword);
  };

  console.log(userState);

  return (
    <div className="md:w-5/12">
      <p className="text-[#4942a2] font-bold border-b-2 border-[#4942a2]">
        ورود
      </p>
      <div className="mt-5">
        <div className="w-24 h-24 bg-[#f3f3f3] rounded-full flex justify-center items-center mx-auto mb-5">
          <img src={loginLogo} alt="login" className="w-16 h-16" />
        </div>
        {rememberPassword ? (
          <RememberForm close={setRememberPassword} />
        ) : (
          <form className="mb-5 text-center" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              id="userName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
              placeholder="شماره موبایل، نام کاربری یا ایمیل"
              className="py-1 px-3 text-[#484848] bg-white border-b border-[#e1e1e1] w-full md:w-4/5 text-sm outline-none"
            />
            <div className="h-6">
              {formik.touched.userName && formik.errors.userName ? (
                <small className="text-[#e3342f] text-xs block w-full md:w-4/5 mx-auto text-start">
                  {formik.errors.userName}
                </small>
              ) : null}
            </div>
            <input
              type="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.password}
              placeholder="رمز عبور"
              className="py-1 px-3 text-[#484848] bg-white border-b border-[#e1e1e1] w-full md:w-4/5 mx-auto text-sm mt-3 outline-none"
            />
            <div className="h-6">
              {formik.touched.password && formik.errors.password ? (
                <small className="text-[#e3342f] text-xs block w-full md:w-4/5 mx-auto text-start">
                  {formik.errors.password}
                </small>
              ) : null}
            </div>
            <div className="mt-14 text-[#37287b] text-sm font-bold text-center">
              <p className="cursor-pointer" onClick={rememberPasswordHandler}>
                رمز عبور خود را فراموش کرده ام!
              </p>
            </div>
            <div className="text-center  mt-10">
              <button
                type="submit"
                className="bg-[#37287b] py-[10px] px-10 text-sm rounded-[50px] text-white"
              >
                ورود
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
