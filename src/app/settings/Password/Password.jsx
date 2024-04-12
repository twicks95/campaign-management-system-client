import React, { useState } from "react";
import styles from "./Password.module.css";
import InputPassword from "@/components/InputPassword/InputPassword";
import Wrapper from "@/components/Wrapper/Wrapper";
import Button from "@/components/Button/Button";
import { EditFilled, SaveFilled, SaveOutlined } from "@ant-design/icons";

const cachePassword = "MyP4ssw0rd!";

function Password() {
  const [edit, setEdit] = useState(false);
  const [password, setPassword] = useState({
    current: "MyP4ssw0rd!",
    new: "",
    confirmPassword: "error",
  });
  return (
    <div>
      <div className="text-lg font-medium">Password</div>
      <div className="grid grid-cols-1 gap-y-6 mt-14">
        <span className="text-sm text-sidebar-light font-medium">
          Please enter you current password to change your password
        </span>
        <Wrapper className="shadow-md flex-col gap-y-4">
          <div className="grid grid-cols-8 w-full items-center">
            <div className="col-start-1 col-span-2">
              <span className={styles.inputLabel}>Current password</span>
            </div>
            <InputPassword
              disabled={!edit}
              // onChange={(e) => {
              //   setData((prev) => ({ ...prev, name: e.target.value }));
              // }}
              value={!edit ? password.current : cachePassword}
              height={20}
              status={""}
              placeholder="Password"
              className="col-start-3 col-span-8 px-[0.75rem] text-sm font-normal !bg-transparent"
            />
          </div>
          {edit && (
            <>
              <div className="grid grid-cols-8 w-full items-center">
                <div className="col-start-1 col-span-2">
                  <span className={styles.inputLabel}>New password</span>
                </div>
                <InputPassword
                  onChange={(e) => {
                    setPassword((prev) => ({
                      ...prev,
                      new: e.target.value,
                      confirmPassword:
                        e.target.value === prev.new ? "" : "error",
                    }));
                  }}
                  value={password.new}
                  height={20}
                  status={password.confirmPassword}
                  placeholder="Enter new password"
                  className="col-start-3 col-span-8 px-[0.75rem] text-sm font-normal !bg-transparent"
                />
              </div>
              <div className="grid grid-cols-8 w-full items-center">
                <div className="col-start-1 col-span-2">
                  <span className={styles.inputLabel}>
                    Confirm new password
                  </span>
                </div>
                <InputPassword
                  onChange={(e) => {
                    setPassword((prev) => ({
                      ...prev,
                      // new: e.target.value,
                      confirmPassword:
                        e.target.value === prev.new ? "" : "error",
                    }));
                  }}
                  // value={password.new}
                  height={20}
                  status={password.confirmPassword}
                  placeholder="Enter confirm password"
                  className="col-start-3 col-span-8 px-[0.75rem] text-sm font-normal !bg-transparent"
                />
              </div>
            </>
          )}

          <div className={`grid ${edit ? "grid-cols-2" : "grid-cols-1"} gap-4 mt-12`}>
            {edit ? (
              <>
                <Button
                  text="Discard"
                  danger
                  onClick={(e) => {
                    e.preventDefault(), setEdit(false);
                  }}
                />
                <Button text="Save password" primary icon={<SaveFilled/>} />
              </>
            ) : (
              <Button
                text="Edit password"
                primary
                icon={<EditFilled />}
                onClick={(e) => {
                  e.preventDefault(), setEdit(true);
                }}
              />
            )}
          </div>
        </Wrapper>
      </div>
    </div>
  );
}

export default Password;
