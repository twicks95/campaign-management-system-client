import React, { useState } from "react";
import InputText from "../../../../components/InputText/InputText";
import styles from "./AddListForm.module.css";
import Button from "../../../../components/Button/Button";
import {
  FilterFilled,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import Wrapper from "../../../../components/Wrapper/Wrapper";
import { Divider, Tag, TreeSelect } from "antd";
import { TweenOneGroup } from "rc-tween-one";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { SHOW_PARENT } = TreeSelect;
const treeData = [
  {
    title: "Gender",
    value: "0-0",
    // key: "0-0",
    children: [
      {
        title: "Male",
        value: "male",
        key: "male",
      },
      {
        title: "Female",
        value: "female",
        key: "female",
      },
    ],
  },
  {
    title: "Age",
    value: "0-1",
    // key: "0-1",
    children: [
      {
        title: "Age: > 18 yo",
        value: "> 18 yo",
        key: "> 18 yo",
      },
      {
        title: "Age: < 19 yo",
        value: "< 19 yo",
        key: "< 19 yo",
      },
      {
        title: "Age: < 26 yo",
        value: "< 26 yo",
        key: "< 26 yo",
      },
      {
        title: "Age: > 25 yo",
        value: "> 25 yo",
        key: "> 25 yo",
      },
    ],
  },
  {
    title: "Marriage Status",
    value: "0-2",
    // key: "0-2",
    children: [
      {
        title: "Marriage Status: Single",
        value: "single",
        key: "single",
      },
      {
        title: "Marriage Status: Married",
        value: "married",
        key: "married",
      },
    ],
  },
];

function AddListForm({ dataStep, handleStep, handleClickStep }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    entranceCondition: [],
    // entranceCondition: [
    //   "Gender: Male",
    //   "Age: > 25yo",
    //   "Marriage Status: Married",
    // ],
  });

  const handleClose = (removedTag) => {
    const newEntranceCondition = data.entranceCondition.filter(
      (tag) => tag !== removedTag
    );
    console.log(newEntranceCondition);
    setData((prev) => ({ ...prev, entranceCondition: newEntranceCondition }));
  };

  const handleBack = () => {
    handleClickStep(0); // back to step 0
  };

  const handleNext = () => {
    setLoading(true);
    // setTimeout(() => {
    handleStep(
      dataStep.map((obj, index) =>
        index === 1 ? { ...obj, addList: data } : obj
      )
    );
    setLoading(false);
    // }, 3000);
  };

  const [value, setValue] = useState(["0-0-0"]);
  const onChange = (newValue) => {
    console.log("onChange ", newValue);
    setValue(newValue);
    setData((prev) => ({ ...prev, entranceCondition: newValue }));
  };

  const tProps = {
    treeData,
    value,
    onChange,
    treeDefaultExpandAll: true,
    multiple: true,
    allowClear: true,
    // treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Condition",
    style: {
      width: "100%",
    },
  };

  return (
    <div className="my-13">
      <div className="mb-4 grid grid-cols-4">
        <div className={`${styles.inputLabel} col-start-1 col-span-1`}>
          Campaign Name
        </div>
        <InputText
          disabled={true}
          value={dataStep[0].campaignInformation.campaignName}
          className="col-start-2 col-span-4 !h-11 px-[0.75rem] text-sm font-normal !text-gray-500"
        />
      </div>
      <div className="mb-8 grid grid-cols-4">
        <div className={`${styles.inputLabel} col-start-1 col-span-1`}>
          Campaign Type
        </div>
        <InputText
          disabled={true}
          value={dataStep[0].campaignInformation.campaignType}
          className="col-start-2 col-span-4 !h-11 px-[0.75rem] text-sm font-normal !text-gray-500"
        />
      </div>
      <div className="mb-8 grid grid-cols-4">
        <div className={`${styles.inputLabel} col-start-1 col-span-1`}>
          Entrance Condition
        </div>
        <Wrapper className="flex flex-col col-start-2 col-span-4 shadow-sm border-2 border-[#ededed]">
          <TreeSelect
            {...tProps}
            // defaultValue={0}
            value={data.entranceCondition}
            treeLine
            suffixIcon={<FontAwesomeIcon icon={faFilter} />}
            labelInValue
            // tagRender={(e) => (
            //   <Tag
            //     // key={index}
            //     bordered={false}
            //     className="bg-gray-200 px-4 py-1 rounded-lg font-medium"
            //     closable={true}
            //     onClose={handleClose}
            //   >
            //     <span className="mr-4">{value}</span>
            //   </Tag>
            // )}
          />
          <div>
            {/* <TweenOneGroup
              appear={false}
              enter={{
                scale: 0.8,
                opacity: 0,
                type: "from",
                duration: 100,
              }}
              leave={{
                opacity: 0,
                width: 0,
                scale: 0,
                duration: 200,
              }}
              onEnd={(e) => {
                if (e.type === "appear" || e.type === "enter") {
                  e.target.style = "display: inline-block";
                }
              }}
            >
              {data.entranceCondition.map((value, index) => {
                return (
                  <Tag
                    key={index}
                    bordered={false}
                    className="bg-gray-200 px-4 py-1 rounded-lg font-medium"
                    closable={true}
                    onClose={handleClose}
                  >
                    <span className="mr-4">{value}</span>
                  </Tag>
                );
              })}
            </TweenOneGroup> */}
          </div>
          <Divider className="bg-gray-300 my-4" />
          <div className="self-end text-xs text-gray-500 font-medium">
            showing 240 result
          </div>
        </Wrapper>
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
                <div className="mr-2">Next</div>
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </div>
            }
            primary
            onClick={handleNext}
          />
        </div>
        <Button text="Save as draft" />
      </div>
    </div>
  );
}

export default React.memo(AddListForm);
