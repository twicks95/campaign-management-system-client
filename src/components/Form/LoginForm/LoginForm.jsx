"use client";

import React, { useCallback, useEffect, useState } from "react";
import InputText from "../../InputText/InputText";
import Button from "../../Button/Button";
import Link from "next/link";
import { navigateToDashboard, navigateToRegister } from "../../../app/actions";

function Form() {
  const [state, setState] = useState({});
  const [loading, setIsLoading] = useState(false);

  const handleLogin = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      // navigateToDashboard();
      window.location.pathname = "/dashboard";
      setIsLoading(true);
    }, 3000);
  }, []);

  const handleRegister = useCallback(() => {
    navigateToRegister();
  }, []);

  const handleInput = (e) => {
    const { id, value } = e.target;
    setState((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="w-[200px] sm:w-[31.25rem] text-white">
      <h3 className="text-[3.125rem] font-bold">
        SIGN <span className="text-[#00ED97]">IN</span>
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
          <InputText
            id="password"
            placeholder="Enter password"
            className="mt-3"
            value={state?.password}
            onChange={handleInput}
          />
        </div>

        <Link href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/forgot-password`}>
          <span className="underline text-[0.9375rem] font-medium">
            Forgot Password ?
          </span>
        </Link>
      </div>

      <div>
        <Button
          primary
          text="Sign In"
          className="mb-3"
          loading={loading}
          onClick={handleLogin}
        />
        <Button
          text="Register"
          className="text-white border-2 border-white bg-[#132748]"
          onClick={handleRegister}
        />
      </div>
    </div>
  );
}

export default React.memo(Form);
