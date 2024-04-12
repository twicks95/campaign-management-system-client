"use client"

import React from "react";
import Button from "@/components/Button/Button";
import { Divider } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import TemplateListTable from "@/components/Table/TemplateList/TemplateListTable";

export default function Template() {
  const router = useRouter();
  return (
    <div className="min-h-screen px-13 py-7">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Template List</h1>
        <Button
          text="Create template"
          primary
          className="text-sm font-medium leading-[0]"
          style={{ height: "3rem", width: "10rem" }}
          icon={<PlusCircleOutlined />}
          onClick={() => {
            router.push("/template/create-template");
          }}
        />
      </div>
      <Divider />
      <TemplateListTable />
    </div>
  );
}
