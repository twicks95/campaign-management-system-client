import { Button, Popover, Table } from "antd"
import { EllipsisOutlined } from "@ant-design/icons"
import Tag from "@/components/Tag/Tag";
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
        width: 220,
        dataIndex: "campaignName",
        key: "campaignName",
        fixed: "left",
        ellipsis: {
            showTitle: false,
        },
    },
    {
        title: "Created at",
        width: 260,
        dataIndex: "createdAt",
        key: "createdAt",
        fixed: "left",
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
        width: 200,
        align: "left"
    },
    {
        title: "Channel",
        dataIndex: "channel",
        key: "channel",
        width: 220,
        align: "left",
        render: (channels) => {
            return (
                <div className="flex gap-1">
                    {channels.map((channel, index) => (channel ? <Tag key={index} status={channel} className="w-fit mx-0" /> : <div key={index}>-</div>))}
                </div>
            )
        }
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        align: "center",
        width: 80,
        render: (status) => {
            return (
                <Tag status={status} className="mx-0" />
            )
        }
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