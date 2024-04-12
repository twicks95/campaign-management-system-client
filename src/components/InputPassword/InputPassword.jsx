import React from "react";
import { ConfigProvider, Input } from "antd";

function InputPassword({
  id,
  size = "large",
  className,
  placeholder = "Password",
  status = "", // "" || "error" || "warning"
  style,
  value,
  onChange,
  disabled = false,
  height = 54,
}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          controlHeight: height,
          // controlHeightLG: height,
          //   colorBgContainer: "#000000",
          //   colorFillContentHover: "#000000",
          //   controlItemBgActiveHover: "#154189",
          //   colorBgTextActive: "#154189",
          //   controlItemBgActive: "#154189 !important"
        },
      }}
    >
      <Input.Password
        disabled={disabled}
        id={id}
        status={status}
        style={style}
        placeholder={placeholder}
        className={`${className} font-medium text-lg px-6`}
        value={value}
        size={size}
        onChange={onChange}
      />
    </ConfigProvider>
  );
}

export default React.memo(InputPassword);
