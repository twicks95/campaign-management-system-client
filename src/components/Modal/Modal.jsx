"use client";

import React, { useImperativeHandle, useState } from "react";
import { Modal } from "antd";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AntModal({ passedInRef, centered = false, children, footer = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useImperativeHandle(passedInRef, () => ({
    open: () => {
      showModal();
    },
    close: () => {
      handleCancel();
    },
  }));

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title={<span className="underline">Campaign Preview</span>}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      destroyOnClose={true}
      centered={centered}
      //   footer={[]}
      closeIcon={
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="hover:text-[#1677FF] h-"
        />
      }
      width={"70%"}
      classNames={{
        header: "!p-13",
        body: "!px-13 !pb-13 !h-auto",
        wrapper: "py-20",
      }}
    >
      <div>{children}</div>
    </Modal>
  );
}

export default AntModal;
