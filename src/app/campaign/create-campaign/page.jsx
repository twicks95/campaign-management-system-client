"use client";

import AddListForm from "@/app/campaign/create-campaign/AddListForm/AddListForm";
import CampaignInformationForm from "@/app/campaign/create-campaign/CampaignInformationForm/CampaignInformationForm";
import SelectTemplate from "@/app/campaign/create-campaign/SelectTemplate/SelectTemplate";
import Tips from "@/components/Tips/Tips";
import Wrapper from "@/components/Wrapper/Wrapper";
import { Button, ConfigProvider, Steps } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import master from "../../../../master.json";
import { Helmet } from "react-helmet";
const tips = master.tips;
import { useRouter } from "next/navigation";
import { LeftCircleOutlined } from "@ant-design/icons";

// const customDot = (dot, { status, index }) => (
//   <Popover
//     content={
//       <span>
//         step {index} status: {status}
//       </span>
//     }
//   >
//     {dot}
//   </Popover>
// );

const stepItems = [
  {
    title: (
      <span className="font-medium text-[#1677FF]">Campaign Information</span>
    ),
    description: "Adding campaign information",
    index: 0,
    text: "Campaign Information",
  },
  {
    title: <span className="font-medium text-[#1677FF]">Add List</span>,
    description: "Adding campaign list",
    index: 1,
    text: "Add List",
  },
  {
    title: <span className="font-medium text-[#1677FF]">Select Template</span>,
    description: "Selecting template for campaign",
    index: 2,
    text: "Select Template",
  },
];

function CreateCampaign() {
  const pageTitle = "Create Campaign | Campaign Management System";
  const pageDescription = "A create campaign page";

  const router = useRouter();

  const [tipsContent, setTipsContent] = useState("-");
  const [completeFormIndex, setCompleteFormIndex] = useState(0);
  const [dataStep, setDataStep] = useState([
    { campaignInformation: null },
    { addList: null },
    { selectTemplate: null },
  ]);

  const pickTipsContent = () => {
    completeFormIndex === 0
      ? setTipsContent(tips.campaignInformation)
      : completeFormIndex === 1
      ? setTipsContent(tips.addList)
      : setTipsContent(tips.selectTemplate);
  };

  // get form data in initialize page
  useEffect(() => {
    setTimeout(() => {
      const dataFromAPI = [
        { campaignInformation: null },
        { addList: null },
        { selectTemplate: null },
      ];

      handleStep(dataFromAPI);
    }, 1000);
  }, []);

  useEffect(() => {
    pickTipsContent();
  }, [completeFormIndex]);

  const handleStep = (dataStep) => {
    let _index = 0;
    for (const [index, data] of dataStep.entries()) {
      let stop = false; // parameter to stop looping dataStep when meets the null value
      // loop the data object
      for (const form in data) {
        const _form = data[form];
        if (!_form) {
          // when data from form is null
          _index = index;
          stop = true;
          break;
        }
        // loop the form object
        for (const field in _form) {
          if (!_form[field]) {
            // when value from field of form is null
            _index = index;
            stop = true;
            break;
          }
        }
      }

      if (stop) {
        break;
      }
    }
    setCompleteFormIndex(_index);
    setDataStep(dataStep);
  };

  const handleClickStep = useCallback(
    (index) => {
      for (const form in dataStep[index]) {
        const _form = dataStep[index][form];
        if (!_form) {
          // when data from form is null
          break;
        }
        // loop the form object
        for (const field in _form) {
          if (!_form[field]) {
            // when value from field of form is null
            break;
          }
        }
        setCompleteFormIndex(index);
      }
    },
    [dataStep]
  );

  return (
    <div className="min-h-screen px-13 py-7">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <div className="mb-10">
        <Button
          className="text-base p-0 mb-3"
          icon={<LeftCircleOutlined />}
          type="link"
          onClick={() => {
            router.back();
          }}
        >
          Back
        </Button>
        <h1 className="font-bold text-xl">Create Campaign</h1>
      </div>

      <Wrapper className="grid grid-cols-4 gap-8">
        <div>
          <span className="text-[#d2d2d2] font-medium">{`STEP ${
            completeFormIndex + 1
          } OF ${stepItems.length}`}</span>
          <h2 className="font-medium mt-2">
            {stepItems[completeFormIndex].text}
          </h2>
        </div>

        <div className="col-start-1 col-span-3">
          {completeFormIndex === 0 ? (
            <CampaignInformationForm
              dataStep={dataStep}
              handleStep={handleStep}
              master={master}
            />
          ) : completeFormIndex === 1 ? (
            <AddListForm
              dataStep={dataStep}
              handleStep={handleStep}
              handleClickStep={handleClickStep}
            />
          ) : (
            <SelectTemplate
              dataStep={dataStep}
              handleStep={handleStep}
              handleClickStep={handleClickStep}
            />
          )}
          {/* <SelectTemplate dataStep={dataStep} handleStep={handleStep} /> */}
        </div>
        <div>
          <div className="px-7 mb-12 shadow-md rounded-lg">
            <span className="text-sm font-medium">Steps</span>
            <ConfigProvider
              theme={{
                token: {
                  // colorPrimary: "none"
                },
                components: {
                  Steps: {
                    // controlItemBgActive: "#000000",
                  },
                },
              }}
            >
              <Steps
                // progressDot={customDot}
                onChange={handleClickStep}
                className="px-1 mt-5"
                direction="vertical"
                size="small"
                current={completeFormIndex}
                items={stepItems}
              />
            </ConfigProvider>
          </div>
          <Tips content={tipsContent} />
        </div>
      </Wrapper>
    </div>
  );
}

export default CreateCampaign;
