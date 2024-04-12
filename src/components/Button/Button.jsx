import React from "react";
import { Button, ConfigProvider } from "antd";

function AntButton({
  // type,
  type = "default",
  disabled = false,
  text = "Button",
  htmlType = "button",
  value,
  onClick = null,
  style,
  className = "",
  loading = false,
  primary = false,
  danger = false,
  icon,
}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          // colorPrimaryBg: "#1D68E3"
        },
        components: {
          Button: {
            /* here is your component tokens */
            // defaultBorderColor: "#ff9a9a",
            // primaryColor: "#1D68E3",
            // // colorBgBase: "#1D68E3",
            // defaultBg: "#1D68E3 ",
            // groupBorderColor: "#1D68E3 !important",
            // // colorPrimaryBg: "#1D68E3 !important",
            // // colorBgContainer: "#1D68E3 !important",
            // defaultHoverBg: "#1D68E3 !important",
            // colorBgElevated: "#1D68E3",
          },
        },
      }}
    >
      <Button
        className={`${
          disabled && "hover:bg-[#f4f4f4] hover:!text-[#c2c2c2]"
        } ${className}  ${
          primary &&
          !disabled &&
          "border-none !bg-[#1D68E3] hover:!bg-[#0d50be] !text-white"
        } ${
          danger && "border border-[#EB1212]  hover:!bg-[#EB1212] hover:!text-white text-[#EB1212]"
        } flex items-center justify-center w-full h-14 text-base font-bold rounded-lg`}
        type={type}
        disabled={disabled}
        htmlType={htmlType}
        onClick={onClick}
        style={style}
        loading={loading}
        value={value}
        icon={icon}
      >
        {text}
      </Button>
    </ConfigProvider>
  );
}

export default React.memo(AntButton);
