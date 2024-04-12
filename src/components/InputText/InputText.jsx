import React from "react";
import { Input } from "antd";

function InputText({
  id,
  placeholder,
  value,
  prefix = null,
  suffix = null,
  className = "",
  onChange,
  disabled = false
}) {
  return (
    <Input
      id={id}
      placeholder={placeholder}
      value={value}
      prefix={prefix}
      suffix={suffix}
      className={`${className} h-16 font-medium text-lg px-6`}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

export default React.memo(InputText);
