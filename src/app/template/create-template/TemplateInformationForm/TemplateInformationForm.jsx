"use client";

import { ConfigProvider, DatePicker, Input, Select } from "antd";
import React, { useState } from "react";
import styles from "./TemplateInformationForm.module.css";
import { RightCircleOutlined } from "@ant-design/icons";
import CampaignTypeRadio from "../../../../components/Radio/CampaignTypeRadio/CampaignTypeRadio";
import ChannelRadio from "../../../../components/Radio/ChannelRadio/ChannelRadio";
import InputText from "../../../../components/InputText/InputText";
import Button from "../../../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { useRouter } from "next/navigation";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

function TemplateformationForm({ dataStep, handleStep, master }) {
  //   const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    templateStatus: "wew",
    templateName: "Father's day campaign",
    campaignDescription: "wew",
    voucherCode: "FOC214FTHR",
  });

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
        <div className="mb-8">
          <h3 className={`${styles.groupLabel}`}>Channel</h3>
          <ChannelRadio master={master} data={data} setData={setData} />
        </div>
        <div className="mb-8">
          <h3 className={`${styles.groupLabel}`}>Campaign Type</h3>
          <CampaignTypeRadio master={master} data={data} setData={setData} />
        </div>
        <div>
          <h3 className={`${styles.groupLabel}`}>Basic Information</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className={styles.inputLabel}>Status</div>
                <Select
                  placeholder="Select status template"
                  className="h-11 w-full"
                />
              </div>
              <div>
                <div className={styles.inputLabel}>Voucher Code</div>
                <Select
                  placeholder="Select voucher code for this campaign"
                  className="h-11 w-full"
                />
              </div>
            </div>
            <div>
              <div className={styles.inputLabel}>Template Name</div>
              <InputText
                value={data.campaignName}
                placeholder="Enter the campaign name"
                className="!h-11 px-[0.75rem] text-sm font-normal !bg-transparent"
              />
            </div>
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
                  minRows: 5,
                  maxRows: 15,
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-12">
          <Button text="Save as draft" />
          <Button
            text={
              <div className="w-full flex justify-center items-center">
                <div className="mr-2">Next</div>
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </div>
            }
            primary
            loading={loading}
            onClick={handleNext}
          />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default React.memo(TemplateformationForm);
