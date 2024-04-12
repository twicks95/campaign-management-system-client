import Tag from "@/components/Tag/Tag"

export const dataSource = [
    {
        id: 1,
        key: '1',
        campaignName: `Father's day`,
        createdAt: "24 Januari 2024 15:57",
        channel: ["sms"],
        status: "active",
        description: `Running campaign in father's day was created at 1 January 2024 15:57:48, reached 552, opened 40%, and 19.6% conversion campaign`
    },
    {
        id: 2,
        key: '2',
        campaignName: `Father's day`,
        createdAt: "24 Januari 2024 15:57",
        channel: [null],
        status: "active",
        description: `Running campaign in father's day was created at 1 January 2024 15:57:48, reached 552, opened 40%, and 19.6% conversion campaign`
    },
    {
        id: 3,
        key: '3',
        campaignName: `Father's day`,
        createdAt: "24 Januari 2024 15:57",
        channel: ["sms", "email", "whatsapp"],
        status: "inactive",
    },
    {
        id: 4,
        key: '4',
        campaignName: `Mother's day`,
        createdAt: undefined,
        channel: ["sms"],
        status: "draft",
    },
    {
        id: 5,
        key: '5',
        campaignName: `Father's day`,
        createdAt: "24 Januari 2024 15:57",
        channel: ["whatsapp"],
        status: "active",
    },
    {
        id: 6,
        key: '6',
        campaignName: `Father's day`,
        createdAt: "24 Januari 2024 15:57",
        channel: ["whatsapp"],
        status: "active",
    },

];
