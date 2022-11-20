import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../features/user/userSlice";

import registerLogo from "../assets/images/register.svg";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "نام را وارد کنید";
    } else if (values.firstName.length < 3) {
      errors.firstName = "نام حداقل باید شامل 3 کاراکتر باشد";
    }

    if (!values.lastName) {
      errors.lastName = "نام خانوادگی را وارد کنید";
    } else if (values.lastName.length < 3) {
      errors.lastName = "نام خانوادگی حداقل باید شامل 3 کاراکتر باشد";
    }

    if (!values.userName) {
      errors.userName = "نام کاربری را وارد کنید";
    } else if (values.userName.length < 5) {
      errors.userName = "نام کاربری حداقل باید شامل 5 کاراکتر باشد";
    }

    if (!values.mobile) {
      errors.mobile = "موبایل را وارد کنید";
    } else if (values.mobile.length !== 11) {
      errors.mobile = "شماره موبایل وارد شده معتبر نیست";
    }

    if (!values.email) {
      errors.email = "ایمیل را وارد کنید";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "ایمیل وارد شده معتبر نیست";
    }

    if (!values.password) {
      errors.password = "رمز عبور را وارد کنید";
    } else if (values.password < 6) {
      errors.password = "رمز عبور حداقل باید شامل 6 کاراکتر باشد";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "تکرار رمز عبور را وارد کنید";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "رمز عبور شما یکسان نیست";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      mobile: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  return (
    <div className="md:w-5/12">
      <p className="text-[#4942a2] font-bold border-b-2 border-[#4942a2]">
        عضویت
      </p>
      <div className="mt-5">
        <div className="w-24 h-24 bg-[#f3f3f3] rounded-full flex justify-center items-center mx-auto mb-5">
          <img src={registerLogo} alt="login" className="w-16 h-16" />
        </div>
        <form
          className="mb-5 flex flex-wrap justify-between"
          onSubmit={formik.handleSubmit}
        >
          <div className="md:w-[45%]">
            <input
              type="text"
              id="firstName"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              placeholder="نام"
              className="py-1 px-3 text-[#484848] bg-white border-b border-[#e1e1e1] w-full text-sm outline-none"
            />
            <div className="h-6">
              {formik.touched.firstName && formik.errors.firstName ? (
                <small className="text-[#e3342f] text-xs">
                  {formik.errors.firstName}
                </small>
              ) : null}
            </div>
          </div>
          <div className="md:w-[45%]">
            <input
              type="text"
              id="lastName"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              placeholder="نام خانوادگی"
              className="py-1 px-3 text-[#484848] bg-white border-b border-[#e1e1e1] w-full text-sm outline-none"
            />
            <div className="h-6">
              {formik.touched.lastName && formik.errors.lastName ? (
                <small className="text-[#e3342f] text-xs">
                  {formik.errors.lastName}
                </small>
              ) : null}
            </div>
          </div>
          <div className="md:w-[45%]">
            <input
              type="text"
              id="userName"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
              placeholder="نام کاربری"
              className="py-1 px-3 text-[#484848] bg-white border-b border-[#e1e1e1] w-full text-sm outline-none"
            />
            <div className="h-6">
              {formik.touched.userName && formik.errors.userName ? (
                <small className="text-[#e3342f] text-xs">
                  {formik.errors.userName}
                </small>
              ) : null}
            </div>
          </div>
          <div className="md:w-[45%]">
            <input
              type="text"
              id="mobile"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobile}
              placeholder="شماره موبایل"
              className="py-1 px-3 text-[#484848] bg-white border-b border-[#e1e1e1] w-full text-sm outline-none"
            />
            <div className="h-6">
              {formik.touched.mobile && formik.errors.mobile ? (
                <small className="text-[#e3342f] text-xs">
                  {formik.errors.mobile}
                </small>
              ) : null}
            </div>
          </div>
          <div className="w-full">
            <input
              type="email"
              id="email"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="آدرس ایمیل"
              className="py-1 px-3 text-[#484848] bg-white border-b border-[#e1e1e1] w-full text-sm outline-none"
            />
            <div className="h-6">
              {formik.touched.email && formik.errors.email ? (
                <small className="text-[#e3342f] text-xs">
                  {formik.errors.email}
                </small>
              ) : null}
            </div>
          </div>
          <div className="md:w-[45%]">
            <input
              type="password"
              id="password"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="رمز عبور"
              className="py-1 px-3 text-[#484848] bg-white border-b border-[#e1e1e1] w-full text-sm outline-none"
            />
            <div className="h-6">
              {formik.touched.password && formik.errors.password ? (
                <small className="text-[#e3342f] text-xs">
                  {formik.errors.password}
                </small>
              ) : null}
            </div>
          </div>
          <div className="md:w-[45%]">
            <input
              type="password"
              id="confirmPassword"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              placeholder="تکرار رمز عبور"
              className="py-1 px-3 text-[#484848] bg-white border-b border-[#e1e1e1] w-full text-sm outline-none"
            />
            <div className="h-6">
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <small className="text-[#e3342f] text-xs">
                  {formik.errors.confirmPassword}
                </small>
              ) : null}
            </div>
          </div>
          <div className="text-center mt-10 mx-auto">
            <button
              type="submit"
              className="bg-[#37287b] py-[10px] px-10 text-sm rounded-[50px] text-white"
            >
              عضویت
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
