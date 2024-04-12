"use client";

import Image from "next/image";
import sidebarStyles from "./sidebar.module.css";
import { useCallback, useEffect, useState } from "react";
import { Menu, Button, theme, ConfigProvider } from "antd";
// import Link from "next/link";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";
import {
  navigateToDashboard,
  navigateToCampaign,
  navigateToTemplate,
  navigateToSetting,
  navigateToSettings,
  navigateToHelp,
  navigateToDocumentation,
  navigateToCalendar,
} from "../../app/actions";

import {
  LeftCircleOutlined,
  RightCircleOutlined,
  LogoutOutlined,
  CustomerServiceFilled,
  ProductFilled,
  UserOutlined,
  LockOutlined,
  DesktopOutlined,
  LockFilled,
} from "@ant-design/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faCalendar,
  faCalendarDays,
  faDesktop,
  faFileLines,
  faGear,
  faGears,
  faHeadset,
  faLock,
  faPaperPlane,
  faQuestionCircle,
  faSquarePollHorizontal,
  faSquarePollVertical,
  faTableColumns,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const menus = [
  { name: "dashboard", itemKey: "1", groupKey: "general" },
  { name: "campaign", itemKey: "2", groupKey: "general" },
  { name: "template", itemKey: "3", groupKey: "general" },
  { name: "calendar", itemKey: "4", groupKey: "general" },
  { name: "settings", itemKey: "5", groupKey: "general" },
  {
    name: "profile",
    itemKey: "6",
    groupKey: "settings",
    rootGroup: "general",
  },
  {
    name: "password",
    itemKey: "7",
    groupKey: "settings",
    rootGroup: "general",
  },
  {
    name: "appearance",
    itemKey: "8",
    groupKey: "settings",
    rootGroup: "general",
  },
  { name: "help", itemKey: "9", groupKey: "support" },
  {
    name: "documentation",
    itemKey: "10",
    groupKey: "support",
  },
  { name: "logout", itemKey: "11", groupKey: null },
];

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

function getInitialState() {
  return {
    selectedMenu: {
      itemKey: null,
      groupKey: ["general", "support"],
    },
  };
}

export default function Sidebar() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [hidden, setHidden] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(
    getInitialState().selectedMenu
  );
  const [currentAccessedGroup, setCurrentAccessedGroup] = useState("");

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = (e) => {
    const currentPath = pathName;
    const splittedPath = currentPath.split("/");

    const { key, keyPath } = e;
    keyPath.shift(); // always remove 1st index
    console.log({ key, keyPath });
    if (keyPath.length > 1) {
      const rootGroup = keyPath[1];
      setCurrentAccessedGroup(rootGroup);
    } else {
      setCurrentAccessedGroup(keyPath[0]);
    }

    let newGroupKey = [];
    keyPath.map((a, _index) => {
      const existsGroup = selectedMenu.groupKey.find((b) => a === b);
      existsGroup ? newGroupKey.push(existsGroup) : newGroupKey.push(a);
    });
    setSelectedMenu((prev) => ({
      ...prev,
      itemKey: key,
      groupKey: newGroupKey,
    }));

    key === "1"
      ? // ? navigateToDashboard()
        router.push("/dashboard")
      : key === "2"
      ? navigateToCampaign()
      : key === "3"
      ? navigateToTemplate()
      : key === "4"
      ? navigateToCalendar()
      : key === "6"
      ? navigateToSettings("profile")
      : key === "7"
      ? navigateToSettings("password")
      : key === "8"
      ? navigateToSettings("appearance")
      : key === "9"
      ? navigateToHelp()
      : key === "10"
      ? navigateToDocumentation()
      : null;
  };

  const items = [
    getItem(
      // <span className="font-bold ">GENERAL</span>,
      <span className="font-bold !text-sidebar-light">GENERAL</span>,
      "general",
      // <div className="relative">
      <ProductFilled
        className={`z-50 ${
          currentAccessedGroup === "general" && "!text-[#1D68E3]"
        }`}
      />,
      //   <div
      //     className={`transition-all ease-in-out delay-100 ${
      //       collapsed && currentAccessedGroup === "general"
      //         ? "scale-100"
      //         : "scale-0"
      //     }  absolute left-[-0.95rem] top-2 h-12 w-12 bg-[rgba(0, 0, 0, 0.06)] flex justify-center items-center rounded-lg`}
      //   />
      // </div>,
      [
        getItem(
          <span>Dashboard</span>,
          "1",
          <FontAwesomeIcon icon={faSquarePollVertical} />
        ),
        getItem(
          <span>Campaign</span>,
          "2",
          <div>
            <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
          </div>
        ),
        getItem(
          <span>Template</span>,
          "3",
          <FontAwesomeIcon icon={faTableColumns} />
        ),
        getItem(
          <span>Calendar</span>,
          "4",
          <FontAwesomeIcon icon={faCalendarDays} />
        ),
        getItem(
          <span>Settings</span>,
          "settings",
          <FontAwesomeIcon icon={faGear} />,
          [
            getItem(
              <span>Profile</span>,
              "6",
              <FontAwesomeIcon icon={faUser} />
            ),
            getItem(
              <span>Password</span>,
              "7",
              <FontAwesomeIcon icon={faLock} />
            ),
            getItem(
              <span>Appearance</span>,
              "8",
              <FontAwesomeIcon icon={faDesktop} />
            ),
          ]
        ),
      ]
    ),
    getItem(
      <span className="font-bold text-sidebar-light">SUPPORT</span>,
      "support",
      // <div className="relative">
      //   <div
      //     className={`transition-all ease-in-out delay-100 ${
      //       collapsed && currentAccessedGroup === "support"
      //         ? "scale-100"
      //         : "scale-0"
      //     }  absolute left-[-0.95rem] top-2 h-12 w-12 bg-light-active flex justify-center items-center rounded-lg`}
      //   />
      // </div>,
      <FontAwesomeIcon
        icon={faHeadset}
        className={`${
          currentAccessedGroup === "support"
            ? "!text-[#1D68E3]"
            : "!text-sidebar-light"
        }`}
      />,
      [
        getItem(
          <span>Help</span>,
          "9",
          <FontAwesomeIcon icon={faQuestionCircle} />
        ),
        getItem(
          <span>Documentation</span>,
          "10",
          <FontAwesomeIcon icon={faFileLines} />
        ),
      ]
    ),
    getItem(
      <span className="font-bold text-sidebar-light">Log Out</span>,
      "11",
      <FontAwesomeIcon
        icon={faArrowRightFromBracket}
        className={`!text-sidebar-light`}
      />
    ),
  ];

  useEffect(() => {
    let queryParams;
    const currentPath = pathName;
    const splittedPath = currentPath.split("/");
    const rootPath = splittedPath[1];
    rootPath === "settings" && (queryParams = searchParams.get("section"));

    const hideSideBar = splittedPath.find((val, index) => {
      return val === "authentication";
    });

    !hideSideBar && setHidden(false);
    const isInSettings = rootPath === "settings";
    for (const menu of menus) {
      if (!isInSettings && rootPath === menu.name) {
        setCurrentAccessedGroup(menu.groupKey);
        setSelectedMenu((prev) => ({
          ...prev,
          itemKey: menu.itemKey,
          groupKey: prev.groupKey.find((value) => value === menu.groupKey)
            ? prev.groupKey
            : prev.groupKey.push(menu.groupKey),
        }));
      } else if (isInSettings && menu.name === queryParams) {
        setCurrentAccessedGroup(menu.rootGroup);
        setSelectedMenu((prev) => ({
          ...prev,
          itemKey: menu.itemKey,
          groupKey: prev.groupKey.find((value) => value === menu.groupKey)
            ? prev.groupKey
            : prev.groupKey.push("settings"),
        }));
      }
    }
  }, []);

  useEffect(() => {
    console.log({ selectedMenu });
  }, [selectedMenu]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            /* here is your component tokens */
            // darkSubMenuItemBg: "transparent",
            subMenuItemBg: "rgba(0, 0, 0, 0.03)",
            // itemBorderRadius: 0,
            // subMenuItemBorderRadius: 0,
            // itemMarginInline: 15,
            // itemHeight: 50,
            itemActiveBg: "rgba(0, 0, 0, 0.06)",
            itemSelectedBg: "#1D68E3",
            itemSelectedColor: "#ffffff",
            collapsedIconSize: 18,
            // collapsedWidth: 82,
            // darkPopupBg: "transparent"
            // popupBg: "#ffffff"
            itemHeight: collapsed ? 60 : 40,
            // itemHeight: 20,
            // groupTitleColor: "#ffffff",
          },
        },
      }}
    >
      <div
        style={{
          display: hidden ? "none" : "block",
        }}
        className={`${sidebarStyles.background} relative min-h-screen h-full py-14 shadow-xl`}
      >
        <Button
          className="absolute border-none rounded-full h-8 w-8 top-7 right-[-1rem] bg-transparent flex justify-center items-center"
          onClick={toggleCollapsed}
        >
          {collapsed ? (
            <RightCircleOutlined className="text-[#1D68E3] font-bold bg-white rounded-full text-xl leading-[0] p-1" />
          ) : (
            <LeftCircleOutlined className="text-[#1D68E3] font-bold bg-white rounded-full text-xl leading-[0] p-1" />
          )}
        </Button>
        <div className="flex flex-col justify-center items-center mb-14">
          <Image
            className="transition-all ease-in-out delay-100"
            // src="/assets/images/brand-logo-1.svg"
            // height={collapsed ? 0 : 52.42}
            // width={collapsed ? 36 : 128}
            src="/assets/icons/sidebar-main-logo.svg"
            height={collapsed ? 25 : 50}
            width={collapsed ? 25 : 50}
            priority
            alt="app-logo"
          />
          {!collapsed && (
            <span className="text-xs text-center font-medium mt-2">
              Campaign
              <br /> Management System
            </span>
          )}
        </div>
        {selectedMenu.itemKey !== null && (
          <Menu
            defaultSelectedKeys={[selectedMenu.itemKey, "general"]}
            defaultOpenKeys={selectedMenu.groupKey}
            mode="inline"
            theme="light"
            inlineCollapsed={collapsed}
            items={items}
            onClick={handleMenuClick}
            className={`font-medium bg-transparent ${!collapsed && "w-60"}`}
          />
        )}
      </div>
    </ConfigProvider>
  );
}
