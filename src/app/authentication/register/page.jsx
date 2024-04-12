import Image from "next/image";
import React, { useCallback } from "react";
import styles from "./register.module.css";
import RegisterForm from "@/components/Form/LoginForm/RegisterForm";

export const metadata = {
  title: "Register | Campaign System Management",
  description: "Layer page for user registration",
};

function Register() {
  return (
    <div className="flex min-h-screen">
      <div
        id="left-section"
        className="bg-white flex flex-col justify-center items-center w-1/2 px-[5.3125rem] py-[6.875rem]"
      >
        <Image
          className="self-start mb-[87px]"
          //   className="self-start !h-[141px] sm:!h-[171px] !w-[43px] sm:!w-[73px]"
          style={{ height: "auto", width: "auto" }}
          src={"/assets/images/brand-logo.svg"}
          height={171}
          width={73}
          priority
          alt="brand-logo"
        />

        <Image
          style={{ height: "auto", width: "auto" }}
          src={"/assets/images/login-illustration.svg"}
          height={550}
          width={550}
          priority
          alt="register-illustration"
        />
      </div>

      <div
        id="form-section"
        className={`${styles.formContainer} flex flex-col justify-center items-center w-1/2 px-12 sm:px-[6.875rem]`}
      >
        <RegisterForm />
        <span className="text-white font-medium text-xs mt-20">
          Powered by PT. Mitra Mandiri Informatika
        </span>
      </div>
    </div>
  );
}

export default Register;
