import Button from "@/components/Button/Button";
import InputText from "@/components/InputText/InputText";
import Wrapper from "@/components/Wrapper/Wrapper";
import { EditFilled, SaveFilled } from "@ant-design/icons";
import { ConfigProvider, Radio } from "antd";
import React, { useState } from "react";
import styles from "./Appearance.module.css";

function Appearance() {
  const [edit, setEdit] = useState(false);
  const [checkedRadioIndex, setCheckedRadioIndex] = useState({
    theme: { index: 0, value: "light" },
    language: { index: 0, value: "english" },
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          // paddingXS: 0,
        },
        components: {
          Radio: {
            //   wrapperMarginInlineEnd: 0,
            radioSize: 12,
          },
        },
      }}
    >
      <div>
        <div className="text-lg font-medium">Appearance Settings</div>
        <div className="grid grid-cols-1 gap-y-6 mt-14">
          <span className="text-sm text-sidebar-light font-medium">
            Customize your preferences
          </span>
          <Wrapper className="shadow-md flex-col gap-y-4">
            <div className="grid grid-cols-8">
              <div className="col-start-1 col-span-2">
                <span className={styles.inputLabel}>Theme</span>
              </div>
              <Radio.Group className="col-start-3 col-span-6">
                <div className="flex flex-col gap-2">
                  {["Light", "Dark"].map((value, index) => {
                    return (
                      <Radio
                        key={index}
                        value={checkedRadioIndex.theme.value}
                        className={`
              ${
                checkedRadioIndex.theme.index === index &&
                "border-2 !border-[#1D68E3] bg-[#1D68E3] text-white shadow-md"
              } 
              
              flex items-center transition-all ease-in-out delay-120 border-2 border-[#ededed] text-[#1D68E3] rounded-md hover:shadow-md h-10 px-4`}
                        onClick={(e) =>
                          setCheckedRadioIndex((prev) => ({
                            ...prev,
                            theme: { ...prev.theme, index, value: value },
                          }))
                        }
                      >
                        {value}
                      </Radio>
                    );
                  })}
                </div>
              </Radio.Group>
            </div>
            <div className="grid grid-cols-8">
              <div className="col-start-1 col-span-2">
                <span className="col-start-1 col-span-2">Language</span>
              </div>
              <Radio.Group className="col-start-3 col-span-6">
                <div className="flex flex-col gap-2">
                  {["English", "Indonesia"].map((value, index) => {
                    return (
                      <Radio
                        key={index}
                        value={checkedRadioIndex.language.value}
                        className={`
              ${
                checkedRadioIndex.language.index === index &&
                "border-2 !border-[#1D68E3] bg-[#1D68E3] text-white shadow-md"
              } 
              
              flex items-center transition-all ease-in-out delay-120 border-2 border-[#ededed] text-[#1D68E3] rounded-md hover:shadow-md h-10 px-4`}
                        onClick={(e) =>
                          setCheckedRadioIndex((prev) => ({
                            ...prev,
                            language: { ...prev.language, index, value: value },
                          }))
                        }
                      >
                        {value}
                      </Radio>
                    );
                  })}
                </div>
              </Radio.Group>
            </div>

            <div className={`grid grid-cols-2 gap-4 mt-12`}>
              <>
                <Button
                  text="Discard"
                  danger
                  onClick={(e) => {
                    e.preventDefault(), setEdit(false);
                  }}
                />
                <Button
                  text="Save my preference"
                  primary
                  icon={<SaveFilled />}
                />
              </>
            </div>
          </Wrapper>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default React.memo(Appearance);
