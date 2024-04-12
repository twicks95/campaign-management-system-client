"use client";

import { Tooltip } from "antd";
import Image from "next/image";
import React from "react";

import Tag from "@/components/Tag/Tag";

function Header({
  profileName = "Scarlett Johansson",
  divisionName = "Marketing",
}) {
  return (
    <header className="flex justify-between items-center p-[3.125rem]">
      <div className="flex items-center">
        <Image
          src="/assets/avatar-header.svg"
          height={36}
          width={36}
          priority
          alt="avatar"
        />

        <Tooltip placement="right" arrow={false} title={profileName}>
          <span className="text-xs font-medium ml-3 leading-none max-w-[10rem] overflow-hidden truncate ...">
            {profileName}
          </span>
        </Tooltip>

        <div className="h-3 w-[1px] bg-[#E1E1E1] mx-5" />
        <Tag
          icon={
            <Image
              src="/assets/icons/user-tie-solid.svg"
              height={8}
              width={7}
              priority
              alt="role"
              className="mr-1"
            />
          }
          text={divisionName}
        />
      </div>
      <div className="flex items-center">
        <div className="text-xs font-medium mr-13">
          Friday, 09 September 2022 21:27:46
        </div>
        <Image
          src="/assets/images/brand-logo.svg"
          height={32}
          width={74.24}
          priority
          alt="brand-logo"
        />
      </div>
    </header>
  );
}

export default Header;
