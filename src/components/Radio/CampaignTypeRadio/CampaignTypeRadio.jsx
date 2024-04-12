import React, { useEffect, useState } from "react";
import { ConfigProvider, Radio } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faCakeCandles } from "@fortawesome/free-solid-svg-icons";

function CampaignTypeRadio({ master, data, setData }) {
  const [checkedRadioIndex, setCheckedRadioIndex] = useState(null);

  useEffect(() => {
    data.campaignType === "birthday campaign"
      ? setCheckedRadioIndex(0)
      : setCheckedRadioIndex(1);
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          paddingXS: 0,
        },
        components: {
          Radio: {
            wrapperMarginInlineEnd: 0,
            radioSize: 0,
          },
        },
      }}
    >
      <Radio.Group
        className={`grid ${
          master.campaignType.slice(0, 2).length > 2
            ? "grid-cols-3 gap-4"
            : "grid-cols-2 gap-4"
        }`}
        value={data.campaignType}
        onChange={(e) =>
          setData((prev) => ({ ...prev, campaignType: e.target.value }))
        }
      >
        {master.campaignType.map((value, index) => (
          <Radio
            key={index}
            value={value.name.toLowerCase()}
            className={`${
              checkedRadioIndex === index &&
              "border-2 !border-[#1D68E3] bg-[#1D68E3] text-white shadow-md"
            } transition-all ease-in-out delay-120 border-2 border-[#ededed] text-[#1D68E3] rounded-xl h-full hover:shadow-md p-8`}
            onClick={(e) => setCheckedRadioIndex(index)}
          >
            <div className="font-medium">
              <div>
                <div className="flex gap-2 items-center">
                  {index === 0 && (
                    <FontAwesomeIcon icon={faCakeCandles} className="text-xl" />
                  )}
                  {index === 1 && (
                    <FontAwesomeIcon icon={faBullhorn} className="text-xl" />
                  )}
                  <div className="text-base font-bold ">{value.name}</div>
                </div>
                <div className="mt-[6px] leading-tight">
                  {value.description}
                </div>
              </div>
            </div>
          </Radio>
        ))}
      </Radio.Group>
    </ConfigProvider>
  );
}

export default CampaignTypeRadio;
