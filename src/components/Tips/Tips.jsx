import React, { Children } from "react";
import styles from "./Tips.module.css";
import { BulbFilled, BulbTwoTone } from "@ant-design/icons";
import { Divider } from "antd";

function Tips({ title = "Tips", content, className, Children }) {
  return (
    <div
      className={`${className} ${styles.container} relative flex flex-col rounded-lg shadow-md`}
    >
      <div className="flex absolute top-[-1.25rem] left-[17px] w-full">
        <div className="flex justify-center items-center h-10 w-10 rounded-full bg-[#3c3c3c] border-4 border-[#ffffff] z-50">
          <BulbFilled className="text-base text-[#eeff33]" />
        </div>
        <span className="bg-white text-base text-[#3c3c3c] w-2/4 font-bold ml-[-20px] rounded-tr-xl rounded-br-xl flex justify-center items-center border-4 border-white">
          {title}
        </span>
      </div>
      {/* <Divider className="bg-gray-50 mt-5 mb-5"/> */}
      <p className="text-balance text-sm leading-[18px] text-white">{content}</p>
      {Children}
    </div>
  );
}

export default React.memo(Tips);
