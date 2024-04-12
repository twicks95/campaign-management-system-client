"use client";

import React, { useCallback, useEffect, useState } from "react";
import InputText from "../../InputText/InputText";
import Button from "../../Button/Button";
import Link from "next/link";
import { navigateToDashboard, navigateToLogin } from "../../../app/actions";
import InputPassword from "../../InputPassword/InputPassword";

function Form() {
  const [state, setState] = useState({});
  const [confirmPasswordStatus, setConfirmPasswordStatus] = useState("");

  const handleLogin = useCallback(() => {
    navigateToLogin();
  }, []);

  const handleRegister = useCallback(() => {
    navigateToRegister();
  }, []);

  const handleInput = (e) => {
    const { id, value } = e.target;
    setState((prev) => ({ ...prev, [id]: value }));

    if (id === "password") {
      matchCredential({ value });
    } else if (id === "confirmPassword") {
      matchCredential({ confirmPassword: true, value });
    }
  };

  const matchCredential = async ({ confirmPassword = false, value }) => {
    if (confirmPassword) {
      state.password !== value
        ? setConfirmPasswordStatus("error")
        : setConfirmPasswordStatus("");
    } else {
      state.confirmPassword !== value
        ? setConfirmPasswordStatus("error")
        : setConfirmPasswordStatus("");
    }
  };

  return (
    <div className="w-[200px] sm:w-[31.25rem] text-white">
      <h3 className="text-[3.125rem] font-bold">
        SIGN <span className="text-[#00ED97]">UP</span>
      </h3>
      <div id="form-input" className="mt-28 mb-16">
        <div className="mb-[1.875rem]">
          <span className="text-[1.125rem] font-bold">Email</span>
          <InputText
            id="email"
            placeholder="Enter email address"
            className="mt-3"
            value={state?.email}
            onChange={handleInput}
          />
        </div>
        <div className="mb-[1.875rem]">
          <span className="text-[1.125rem] font-bold">Password</span>
          <InputPassword
            id="password"
            placeholder="Enter your password"
            className="mt-3"
            value={state?.password}
            status={confirmPasswordStatus}
            onChange={handleInput}
          />
        </div>
        <div className="mb-[1.875rem]">
          <span className="text-[1.125rem] font-bold">Confirm password</span>
          <InputPassword
            id="confirmPassword"
            placeholder="Confirm your password"
            className="mt-3"
            value={state?.confirmPassword}
            status={confirmPasswordStatus}
            onChange={handleInput}
          />
        </div>
      </div>

      <div>
        <Button
          text="Create my account"
          className="mb-3"
          primary
          onClick={handleRegister}
        />

        <div className="text-sm font-bold mt-7">
          <span>
            Already have an account?{" "}
            <span
              className="cursor-pointer text-[#1D68E3] ml-3"
              onClick={handleLogin}
            >
              Sign in here
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Form);
