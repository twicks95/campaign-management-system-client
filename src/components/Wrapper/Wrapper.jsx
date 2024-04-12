import React from "react";
import styles from "./Wrapper.module.css";

function Wrapper({ children, className = "", style }) {
  return (
    <div
      style={style}
      className={`${className.concat(
        " ",
        `${styles.container} w-full flex shadow-lg`
      )}`}
    >
      {children}
    </div>
  );
}

export default React.memo(Wrapper);
