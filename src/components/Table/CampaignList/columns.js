import { Button, Popover, Table } from "antd"
import { EllipsisOutlined } from "@ant-design/icons"
export const columns = [
    {
        title: "No",
        width: 50,
        dataIndex: "id",
        key: "name",
        fixed: "left",
    },
    Table.EXPAND_COLUMN,
    {
        title: "Campaign Name",
        width: 420,
        dataIndex: "campaignName",
        key: "campaignName",
        fixed: "left",
        ellipsis: {
            showTitle: false,
        },
    },
    {
        title: "Campaign Start",
        width: 260,
        dataIndex: "campaignStart",
        key: "campaignStart",
        fixed: "left",
        ellipsis: {
            showTitle: false,
        },
    },
    {
        title: "Campaign End",
        width: 260,
        dataIndex: "campaignEnd",
        key: "campaignEnd",
        fixed: "left",
        ellipsis: {
            showTitle: false,
        },
    },
    {
        title: "Reach",
        dataIndex: "reach",
        key: "reach",
        width: 200,
        align: "right"
    },
    {
        title: "Opened (%)",
        dataIndex: "opened",
        key: "opened",
        width: 200,
        align: "right"
    },
    {
        title: "Conversion (%)",
        dataIndex: "conversion",
        key: "conversion",
        width: 220,
        align: "right"
    },
    {
        title: "Status",
        dataIndex: "tag",
        key: "status",
        align: "center",
        width: 80,
    },
    {
        title: "Action",
        key: "operation",
        // fixed: "center",
        align: "center",
        width: 80,
        render: () => {
            return (
                <Popover
                    placement="left"
                    color="#3d3d3d"
                    content={
                        <div className="flex flex-col justify-center">
                            <Button type="primary" className="text-white">Action 1</Button>
                            <Button type="primary" className="text-white">Action 2</Button>
                        </div>
                    }
                >
                    <EllipsisOutlined className="cursor-pointer text-2xl text-primary" />
                </Popover>
            )
        }
    },
];