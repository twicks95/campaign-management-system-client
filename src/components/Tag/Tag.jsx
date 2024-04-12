import React, { useCallback, useEffect, useState } from "react";
import { Tag } from "antd";

function AntdTag({ className, style, icon = null, status = "default", text }) {
  const [color, setColor] = useState("");

  const pickColor = useCallback((status) => {
    const _status = status.toLowerCase();
    const color =
      _status === "draft"
        ? // ? "#898989"
          "#BDBDBD"
        : _status === "inactive"
        ? "#EB1212"
        : _status === "active"
        ? "#12EB28"
        : _status === "whatsapp"
        ? "#00C208"
        : _status === "sms"
        ? "#3AB8FF"
        : _status === "email"
        ? "#FF4040"
        : "#1D68E3";

    setColor(color);
    return;
  }, []);

  useEffect(() => {
    pickColor(status);
  }, [status, pickColor]);

  return (
    <Tag
      style={style}
      className={`${className} font-medium flex justify-center px-3 rounded-md text-[10px]`}
      color={color}
      icon={icon}
    >
      {text || status}
    </Tag>
  );
}

export default React.memo(AntdTag);
