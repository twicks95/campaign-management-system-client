"use client";

import React from "react";
import Button from "@/components/Button/Button";
import CampaignListTable from "@/components/Table/CampaignList/CampaignListTable";
import { Divider } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

function Campaigns() {
  const router = useRouter();
  return (
    <div className="min-h-screen px-13 py-7">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Campaign List</h1>
        <Button
          text="Create campaign"
          primary
          className="text-sm font-medium leading-[0]"
          style={{ height: "3rem", width: "10rem" }}
          icon={<PlusCircleOutlined />}
          onClick={() => {
            router.push("/campaign/create-campaign");
          }}
        />
      </div>
      <Divider />
      <CampaignListTable />
    </div>
  );
}

export default React.memo(Campaigns);
