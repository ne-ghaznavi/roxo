import React, { useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";

function RememberForm({ close }) {
  const userState = useSelector((state) => state.user);
  const validate = (values) => {
    const errors = {};

    if (!values.mobile) {
      errors.mobile = "شماره موبایل خود را وارد کنید";
    } else if (values.mobile.length !== 11) {
      errors.mobile = "موبایل وارد شده معتبر نیست";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      mobile: "",
    },
    validate,
    onSubmit: (values) => {
      if (values.mobile == userState.mobile) {
        console.log(userState.password);
      }
    },
  });
  return (
    <form className="mb-5 text-center" onSubmit={formik.handleSubmit}>
      <input
        type="numeric"
        id="mobile"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.mobile}
        placeholder="شماره موبایل"
        className="py-1 px-3 text-[#484848] bg-white border-b border-[#e1e1e1] w-full md:w-4/5 text-sm outline-none"
      />
      <div className="h-6">
        {formik.touched.mobile && formik.errors.mobile ? (
          <small className="text-[#e3342f] text-xs block w-full md:w-4/5 mx-auto text-start">
            {formik.errors.mobile}
          </small>
        ) : null}
      </div>
      <div className="text-center mt-10 flex gap-4 justify-center">
        <button
          type="submit"
          className="bg-[#37287b] py-[10px] px-10 text-sm rounded-[50px] text-white w-32"
        >
          بازیابی
        </button>
        <button
          className="bg-[#EFEFEF] text-black py-[10px] px-10 text-sm rounded-[50px] w-32"
          onClick={() => close()}
        >
          بازگشت
        </button>
      </div>
    </form>
  );
}

export default RememberForm;
