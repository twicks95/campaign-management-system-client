"use client";

import React, { useEffect, useState } from "react";
import { dataSource } from "./dataSource";
import { columns } from "./columns";
import { Button, Col, Row, Table, Input, ConfigProvider } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const filter = [
  { name: "All Campaigns", value: "all" },
  { name: "Active", value: "active" },
  { name: "Inactive", value: "inactive" },
  { name: "Draft", value: "draft" },
];

function TemplateListTable
() {
  const [selectedFilter, setSelectedFilter] = useState("");
  //   useEffect(() => {
  //     console.log({ dataSource, columns, filter });
  //   }, []);

  const handleFilter = (e, index) => {
    const { innerHTML } = e.target;
    const filter = innerHTML;
    setSelectedFilter(filter);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <div className="grid grid-cols-4 gap-1">
          {filter.map((_filter, index) => (
            <Button
              key={index}
              className={`transition-all ease-in-out font-medium p-0 ${
                selectedFilter === _filter.name
                  ? "text-primary "
                  : "text-gray-300"
              }`}
              type="link"
              value={_filter.value}
              onClick={(e) => handleFilter(e, index)}
            >
              {_filter.name}
            </Button>
          ))}
        </div>
        <div>
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  /* here is your component tokens */
                  colorBgContainer: "#f6f6f6",
                  paddingInline: 14,
                  controlHeight: 18,
                },
              },
            }}
          >
            <Input
              prefix={<SearchOutlined className="mr-2" />}
              placeholder="Search campaign"
              onPressEnter={(e) => {
                console.log(e);
              }}
            />
          </ConfigProvider>
        </div>
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        scroll={{ x: true }}
        expandable={{
          expandedRowRender: (record) => (
            <p className="px-0 font-semibold">{record.description}</p>
          ),
          rowExpandable: (record) => record.status !== "draft",
        }}
        pagination={{ defaultPageSize: 5, total: dataSource.length }}
      />
    </div>
  );
}

export default React.memo(TemplateListTable
    );
