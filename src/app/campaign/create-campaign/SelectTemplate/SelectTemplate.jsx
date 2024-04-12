import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import {
  EyeFilled,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import {
  faArrowCircleLeft,
  faCheckCircle,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Skeleton, Tooltip } from "antd";
import Image from "next/image";
import React, { useRef, useState } from "react";

function SelectTemplate({ dataStep, handleStep, master, handleClickStep }) {
  const [data, setData] = useState({
    templateId: 0,
  });

  const handleBack = () => {
    handleClickStep(1); // back to step 1
  };

  const previewModal = useRef();

  const handleFinish = () => {};
  return (
    <div className="my-13">
      <div className="grid grid-cols-3 gap-10">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((v, index) => {
          return (
            <Tooltip key={index} title="Click card to choose">
              <Card
                hoverable
                className={`hover:shadow-md hover:border-[#1D68E3] text-center ${
                  data.templateId === ++index &&
                  "shadow-md border-2 border-[#1D68E3]"
                }`}
                onClick={() => {
                  setData((prev) => ({ ...prev, templateId: index }));
                }}
              >
                <Skeleton
                  paragraph={{ rows: 4 }}
                  title={{ width: "100%", style: { height: "3rem" } }}
                />
                <Skeleton
                  paragraph={{ rows: 0 }}
                  title={{
                    width: "100%",
                    style: { height: "3rem" },
                    className: "mt-4",
                  }}
                />
                <div className="!mt-4 mb-6 font-medium">Template {index}</div>
                <Button
                  text="Preview"
                  className="!h-10 text-xs hover:!bg-[#0d50be] hover:!text-white"
                  icon={<FontAwesomeIcon icon={faEye} />}
                  onClick={() => previewModal.current.open()}
                />
              </Card>
            </Tooltip>
          );
        })}
        <Modal passedInRef={previewModal} centered>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/images/birthday_campaign_image.svg"
              alt="campaign-image"
              width={333}
              height={154}
              priority
              className="mb-12"
            />
            <p>
              Dear <span className="font-bold">Doni Aulia</span>, <br />
              <br />
              We at <span>PT. Mitra Mandiri Informatika</span> want to take a
              moment to wish you a very happy birthday! 🎉🎂 <br />
              <br />
              Birthdays are special occasions, and we&apos;re thrilled to
              celebrate with you. As a token of our appreciation, we&apos;ve
              prepared a special gift just for you! 🎁 <br />
              <br />
              Use the code BDAY2024 at checkout to enjoy a{" "}
              <span>discount/offer</span> on your next purchase with us.
              It&apos;s our way of saying thank you for being a valued member of
              our community. We hope your day is filled with joy, laughter, and
              all the things that make you happiest. Here&apos;s to another
              fantastic year ahead! <br />
              <br />
              Warm regards, <br />
              <span>PT. Mitra Mandiri Informatika</span>
            </p>
          </div>
        </Modal>
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
                <div className="mr-2">Finish</div>
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
            }
            primary
            // loading={loading}
            onClick={handleFinish}
          />
        </div>
        <Button text="Save as draft" />
      </div>
    </div>
  );
}

export default React.memo(SelectTemplate);
