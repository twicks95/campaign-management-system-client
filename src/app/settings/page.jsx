"use client";

import React, { useEffect, useState } from "react";
import { Breadcrumb, Menu } from "antd";
import { DesktopOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter, useSearchParams } from "next/navigation";
import Wrapper from "@/components/Wrapper/Wrapper";
import Profile from "./Profile/Profile";
import Password from "./Password/Password";
import Appearance from "./Appearance/Appearance";
import { navigateToSettings } from "../actions";
import Link from "next/link";

const items = [
  {
    label: "Profile",
    key: "profile",
    icon: <UserOutlined />,
    // children: [
    //   {
    //     label: "Privacy",
    //     key: "privacy",
    //     // icon: <LockOutlined />,
    //   },
    // ],
  },
  {
    label: "Password",
    key: "password",
    icon: <LockOutlined />,
  },
  {
    label: "Appearace",
    key: "appearance",
    icon: <DesktopOutlined />,
  },
];

const handleSetBreadcrumbItems = (items, section) => {
  return section === "profile"
    ? [
        ...items.slice(0, 1),
        {
          title: <Link href="/settings?section=profile">Profile</Link>,
        },
      ]
    : section === "password"
    ? [
        ...items.slice(0, 1),
        {
          title: <Link href="/settings?section=password">Password</Link>,
        },
      ]
    : [
        ...items.slice(0, 1),
        {
          title: <Link href="/settings?section=appearance">Appearance</Link>,
        },
      ];
};

function Settings() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const querySection = searchParams.get("section");
  const [section, setSection] = useState("profile");
  const [breadcrumbItems, setBreadcrumbItems] = useState([
    {
      title: "Settings",
    },
  ]);

  useEffect(() => {
    setSection(() => querySection);
    setBreadcrumbItems((prev) => handleSetBreadcrumbItems(prev, querySection));
  }, [querySection]);

  const onClick = (e) => {
    router.push("/settings?section=" + e.key);
    router.refresh();
    setBreadcrumbItems((prev) => handleSetBreadcrumbItems(prev, querySection));
    setSection(e.key);
  };

  // useEffect(() => {
  // }, [section, searchParams]);

  return (
    <div className="min-h-screen px-13 py-7">
      <Wrapper className="grid grid-cols-8 gap-4">
        <div className="shadow-md col-start-1 col-span-2 p-6 rounded-lg">
          <h4 className="text-sm font-bold mb-5">Section</h4>
          <Menu
            className="!shadow-md border-none"
            onClick={onClick}
            selectedKeys={[section]}
            mode="inline"
            items={items}
          />
        </div>
        <div className="shadow-md col-start-3 col-span-8 p-6 rounded-lg">
          <Breadcrumb items={breadcrumbItems} className="text-xs mb-2" />
          {querySection === "profile" && <Profile />}
          {querySection === "password" && <Password />}
          {querySection === "appearance" && <Appearance />}
        </div>
      </Wrapper>
    </div>
  );
}

export default React.memo(Settings);
