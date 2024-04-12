import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import InputText from "@/components/InputText/InputText";
import styles from "./Profile.module.css";
import { Avatar, Button, ConfigProvider, Select } from "antd";

import master from "../../../../master.json";
import AntdButton from "@/components/Button/Button";
import Wrapper from "@/components/Wrapper/Wrapper";
import {
  EditFilled,
  EditOutlined,
  FormOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Tag from "@/components/Tag/Tag";
import Image from "next/image";
const email = master.email;

const mappedDomain = (email, domainSuffix) => {
  let domain = [];
  for (const _email of email) {
    if (_email.host === domainSuffix.host) {
      domain = _email.domain.map((_domain) => ({
        value: _domain,
        label: _domain,
      }));

      break;
    }
  }
  return domain.length > 0 ? domain : false;
};

const cacheData = {
  name: "Scarlett Johansson",
  email: "scarlett.johansson@gmail.co.id",
  phoneNumber: "6282324871010",
  emailHost: "gmail",
  emailDomain: ".com",
  emailSuffix: "@gmail.com",
};

function Profile() {
  const [edit, setEdit] = useState(false);
  const router = useRouter();
  const [domainSuffix, setDomainSuffix] = useState({
    host: "gmail",
    domain: ".com",
    suffix: "@gmail.com",
  });
  const [data, setData] = useState({
    name: "Scarlett Johansson",
    email: "scarlett.johansson@gmail.co.id",
    phoneNumber: "6282324871010",
  });

  useEffect(() => {
    console.log({ data });
  }, [data]);

  // const handleSelectEmailHostname = (value, domainSuffix) => {
  //   let newSuffix = "";
  //   domainSuffix.suffix
  //     .split(".")
  //     .splice(1, domainSuffix.suffix.split(".").length)
  //     .map((str, index) => (newSuffix += "." + str));

  //   setDomainSuffix((prev) => ({
  //     ...prev,
  //     host: value,
  //     suffix: newSuffix,
  //   }));
  // };

  return (
    <div>
      <div className="text-lg font-medium">Profile Settings</div>
      <div className="grid grid-cols-1 gap-y-6 mt-14">
        <Wrapper className="flex items-center justify-between shadow-md !px-7">
          <div className="flex items-center gap-x-4">
            <Avatar
              size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
                xl: 80,
                xxl: 100,
              }}
              // src={null}
              // src="/assets/images/profile-photo.jpg"
              src="/assets/avatar-header.svg"
              icon={
                <>
                  {data.name.split(" ").length < 2
                    ? data.name.split(" ")[0].slice(0, 1)
                    : data.name.split(" ")[0].slice(0, 1) +
                      data.name.split(" ")[1].slice(0, 1)}
                </>
              }
            />
            <div className="flex flex-col">
              <span className="font-medium mb-1">Profile picture</span>
              {edit && (
                <Button icon={<UploadOutlined />} name="file">
                  Upload Image
                </Button>
              )}
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-sm">User Role :</span>
            <Tag
              className="py-2 mx-0"
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
              text={"Marketing"}
            />
          </div>
        </Wrapper>
        <div>
          <div className={styles.inputLabel}>Name</div>
          <InputText
            disabled={!edit}
            onChange={(e) => {
              setData((prev) => ({ ...prev, name: e.target.value }));
            }}
            value={edit ? data.name : cacheData.name}
            placeholder="Profile name"
            className="!h-11 px-[0.75rem] text-sm font-normal !bg-transparent"
          />
        </div>
        <div>
          <div className={styles.inputLabel}>Email</div>
          <div className="grid grid-cols-9">
            <div className="col-start-1 col-span-5 flex">
              <InputText
                disabled={!edit}
                onChange={(e) => {
                  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                  console.log(regex.test(e.target.value));
                  !regex.test(e.target.value)
                    ? setData((prev) => ({ ...prev, email: e.target.value }))
                    : null;
                }}
                value={edit ? data.email : cacheData.email}
                placeholder="User email"
                className="!h-11 px-[0.75rem] text-sm font-normal !bg-transparent border-r-0 rounded-tr-none rounded-br-none"
              />
              <InputText
                disabled
                value={
                  edit
                    ? "@" + domainSuffix.host + domainSuffix.domain
                    : "@" + cacheData.emailHost + cacheData.emailDomain
                }
                className="!h-11 px-[0.75rem] text-sm font-normal !bg-transparent border-x-0 rounded-tl-none rounded-none"
              />
            </div>
            <ConfigProvider
              theme={{
                token: {
                  borderRadius: 0,
                  // colorBorder: "transparent",
                  colorBgBase: "#F0F0F0",
                },
                components: {
                  Select: {
                    optionSelectedBg: "#1D68E3",
                    optionSelectedColor: "#ffffff",
                    // borderRadius: 6
                    optionSelectedFontWeight: 600,
                  },
                },
              }}
            >
              <Select
                disabled={!edit}
                className="col-start-6 col-span-2 h-full"
                placeholder="Email provider"
                value={edit ? domainSuffix.host : cacheData.emailHost}
                options={email.map((email) => ({
                  value: email.host,
                  label: email.name,
                }))}
                onSelect={(value) =>
                  setDomainSuffix((prev) => ({
                    ...prev,
                    host: value,
                  }))
                }
              />
              <Select
                disabled={!edit}
                value={edit ? domainSuffix.domain : cacheData.emailDomain}
                className="col-start-8 col-span-2 h-full !border-none"
                options={mappedDomain(email, domainSuffix)}
                onSelect={(value) =>
                  setDomainSuffix((prev) => ({
                    ...prev,
                    domain: value,
                  }))
                }
              />
            </ConfigProvider>
          </div>
        </div>
        <div>
          <div className={styles.inputLabel}>Phone Number</div>
          <InputText
            disabled={!edit}
            value={edit ? data.phoneNumber : cacheData.phoneNumber}
            placeholder="User phone number eg: 82324871010"
            className="!h-11 px-[0.75rem] text-sm font-normal !bg-transparent"
            onChange={(e) => {
              const regex = /^[0-9]$/g;
              console.log(regex.test(e.target.value));
              !regex.test(e.target.value)
                ? setData((prev) => ({ ...prev, phoneNumber: e.target.value }))
                : null;
            }}
          />
        </div>
        <div className={`grid ${edit ? "grid-cols-2" : "grid-cols-1"} gap-4 mt-12`}>
          {edit ? (
            <>
              <AntdButton
                text="Discard"
                danger
                onClick={() => setEdit(false)}
              />
              <AntdButton text="Save Changes" primary />
            </>
          ) : (
            <AntdButton
              text="Edit"
              primary
              icon={<EditFilled />}
              onClick={() => setEdit(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Profile);
