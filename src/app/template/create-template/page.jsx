"use client";

import Tips from "@/components/Tips/Tips";
import Wrapper from "@/components/Wrapper/Wrapper";
import { Button, ConfigProvider, Steps } from "antd";
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import master from "../../../../master.json";
import { Helmet } from "react-helmet";
const tips = master.tips;
import { useRouter } from "next/navigation";
import { LeftCircleOutlined } from "@ant-design/icons";
import TemplateInformationForm from "@/app/template/create-template/TemplateInformationForm/TemplateInformationForm";
import TemplateDetailForm from "@/app/template/create-template/TemplateDetailForm/TemplateDetailForm";

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
      <span className="font-medium text-[#1677FF]">Template Information</span>
    ),
    description: "Add template information",
    index: 0,
    text: "Template Information",
  },
  {
    title: <span className="font-medium text-[#1677FF]">Template Detail</span>,
    description: "Add template detail",
    index: 1,
    text: "Template Detail",
  },
];

function CreateTemplate() {
  const pageTitle = "Create Campaign | Campaign Management System";
  const pageDescription = "A create campaign page";

  const router = useRouter();

  const [tipsContent, setTipsContent] = useState("-");
  const [completeFormIndex, setCompleteFormIndex] = useState(0);
  const [dataStep, setDataStep] = useState([
    { templateInformation: null },
    { templateDesctiption: null },
  ]);

  const pickTipsContent = () => {
    completeFormIndex === 0
      ? setTipsContent(tips.templateInformation)
      : setTipsContent(tips.templateDetail);
  };

  // get form data in initialize page
  useEffect(() => {
    setTimeout(() => {
      const dataFromAPI = [
        { templateInformation: null },
        { templateDesctiption: null },
      ];
      handleStep(dataFromAPI);
    }, 1000);
  }, []);

  useEffect(() => {
    pickTipsContent();
  }, [completeFormIndex]);

  useEffect(() => {
    console.log({ dataStep });
  }, [dataStep]);

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
          const value = _form[field];
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
        <h1 className="font-bold text-xl">Create Template</h1>
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
            <TemplateInformationForm
              dataStep={dataStep}
              handleStep={handleStep}
              master={master}
            />
          ) : (
            <TemplateDetailForm
              dataStep={dataStep}
              handleStep={handleStep}
              handleClickStep={handleClickStep}
            />
          )}
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

export default CreateTemplate;
