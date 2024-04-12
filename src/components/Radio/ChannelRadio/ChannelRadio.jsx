import {
  MailOutlined,
  MessageOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Radio } from "antd";
import React, { useEffect, useState } from "react";

function ChannelRadio({ master, data, setData }) {
  const [checkedRadioIndex, setCheckedRadioIndex] = useState(null);

  useEffect(() => {
    data.campaignChannel === "email"
      ? setCheckedRadioIndex(0)
      : data.campaignChannel === "whatsapp"
      ? setCheckedRadioIndex(1)
      : setCheckedRadioIndex(2);
  }, []);

  return (
    <ConfigProvider
      // theme={{
      //   token: {
      //     // colorPrimary: "none"
      //     //   paddingXS: 0,
      //   },
      //   components: {
      //     Radio: {
      //       // controlItemBgActive: "#000000",
      //       wrapperMarginInlineEnd: 24,
      //       buttonCheckedBg: "#000000 !important",
      //       radioSize: 18,
      //     },
      //   },
      // }}
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
          master.channel.length > 2 ? "grid-cols-4 gap-4" : "grid-cols-2 gap-4"
        }`}
        value={data.campaignChannel}
        onChange={(e) =>
          setData((prev) => ({ ...prev, campaignChannel: e.target.value }))
        }
      >
        {master.channel.map((value, index) => {
          return (
            <Radio
              key={index}
              value={value.toLowerCase()}
              className={`
              ${
                checkedRadioIndex === index &&
                "border-2 !border-[#1D68E3] bg-[#1D68E3] text-white shadow-md"
              } 
              
              flex justify-center items-center transition-all ease-in-out delay-120 border-2 border-[#ededed] text-[#1D68E3] rounded-xl hover:shadow-md`}
              onClick={(e) => setCheckedRadioIndex(index)}
            >
              <div className="font-medium leading-[3rem]">
                {index === 0 ? (
                  <MailOutlined className="mr-1" />
                ) : index === 1 ? (
                  <WhatsAppOutlined className="mr-1" />
                ) : (
                  <MessageOutlined className="mr-1"/>
                )}
                <span>{value}</span>
              </div>
            </Radio>
          );
        })}
      </Radio.Group>
    </ConfigProvider>
  );
}

export default ChannelRadio;
