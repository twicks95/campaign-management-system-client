"use client";

import { ConfigProvider, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./TemplateDetailForm.module.css";
import { RightCircleOutlined } from "@ant-design/icons";
import InputText from "../../../../components/InputText/InputText";
import Button from "../../../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faCircleArrowRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
// import { useRouter } from "next/navigation";

const { TextArea } = Input;

function TemplateDetailForm({ dataStep, handleStep, master, handleClickStep }) {
  //   const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    templateStatus: "wd",
    templateName: "Father's day campaign",
    campaignDescription: "wd",
    voucherCode: "FOC214FTHR",
  });

  const handleBack = () => {
    handleClickStep(0); // back to step 0
  };

  const handleNext = () => {
    setLoading(true);
    setTimeout(() => {
      handleStep(
        dataStep.map((obj, index) =>
          index === 0 ? { ...obj, templateInformation: data } : obj
        )
      );
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    console.log(dataStep);
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          // colorPrimary: "none"
          //   paddingXS: 0,
        },
        components: {
          Radio: {
            // controlItemBgActive: "#000000",
            wrapperMarginInlineEnd: 24,
            buttonCheckedBg: "#000000 !important",
            radioSize: 18,
          },
          DatePicker: {
            colorBgContainer: "#f6f6f6",
          },
        },
      }}
    >
      <div className="my-13">
        <div>
          <h3 className={`${styles.groupLabel}`}>Template Content</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className={styles.inputLabel}>Media content</div>
                <Select
                  placeholder="Select media content eg: Image"
                  className="h-11 w-full"
                />
              </div>
              <div>
                <div className={styles.inputLabel}>Keyword</div>
                <Select
                  placeholder="Select voucher code for this campaign"
                  className="h-11 w-full"
                />
              </div>
            </div>
            {dataStep[0].templateInformation.campaignChannel === "email" && (
              <div>
                <div className={styles.inputLabel}>Subject Email</div>
                <InputText
                  value={data.campaignName}
                  placeholder="Enter the campaign name"
                  className="!h-11 px-[0.75rem] text-sm font-normal !bg-transparent"
                />
              </div>
            )}
            <div>
              <div className={styles.inputLabel}>Template Description</div>
              <TextArea
                value={data.campaignDescription}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    campaignDescription: e.target.value,
                  }))
                }
                className=""
                placeholder="Enter the campaign description"
                autoSize={{
                  minRows: 20,
                  maxRows: 25,
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-2 mt-12">
          <div className="grid grid-cols-2 gap-2 ">
            <Button
              text={
                <div className="w-full flex justify-center items-center">
                  <FontAwesomeIcon icon={faArrowCircleLeft} />
                  <div className="ml-2">Back</div>
                </div>
              }
              onClick={handleBack}
            />
            <Button
              text={
                <div className="w-full flex justify-center items-center">
                  <div className="mr-2">Create template</div>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </div>
              }
              primary
              onClick={handleNext}
            />
          </div>
          <Button text="Save as draft" />
        </div>
        {/* <div className="grid grid-cols-2 gap-2 mt-12">
          <Button text="Save as draft" />
          <Button
            text={
              <div className="w-full flex justify-center items-center">
                <div className="mr-2">Create template</div>
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
            }
            primary
            loading={loading}
            onClick={handleNext}
          />
        </div> */}
      </div>
    </ConfigProvider>
  );
}

export default React.memo(TemplateDetailForm);
