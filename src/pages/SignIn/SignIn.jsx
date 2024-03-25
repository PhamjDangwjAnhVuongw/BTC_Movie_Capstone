import React from "react";
import InputCustom from "../../components/Input/InputCustom";
import Lottie from "react-lottie";
import * as registerAnimation from "./../../assets/animation/register.json";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string().required("Vui lòng nhập tài khoản"),
        matKhau: Yup.string().required("Vui lòng nhập mật khẩu"),
      }),
    });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: registerAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="h-screen flex">
      <div className="animation_signIn w-7/12 flex items-center justify-center">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <div className="form_signIn w-5/12 flex items-center justify-center flex-col">
        <div className="p-10 border border-gray-400 rounded-md space-x-5">
          <h1>Đăng nhập vào movie Cybersoft</h1>
          <form className="space-y-5">
            <InputCustom
              placeholder="Vui lòng nhập tài khoản"
              id="taiKhoan"
              lable="Tài khoản"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.taiKhoan}
              touched={touched.taiKhoan}
              name="taiKhoan"
            />
            <InputCustom
              placeholder="Vui lòng nhập mật khẩu"
              id="matKhau"
              lable="Mật khẩu"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.matKhau}
              touched={touched.matKhau}
              name="matKhau"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
