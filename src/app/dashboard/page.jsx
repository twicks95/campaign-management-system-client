"use client";

import { Helmet } from "react-helmet";
import styles from "./dashboard.module.css";
import { PieChartFilled } from "@ant-design/icons";

export default function Dashboard() {
  const pageTitle = "Login Page | Campaign Management System";
  const pageDescription = "A login page for user authentication";
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <div className="min-h-screen px-13 pb-13">
        <div className="shadow-xl rounded-2xl">
          <div
            className={`${styles.backgroundTop} flex justify-start items-center h-14 px-7 rounded-tr-2xl rounded-tl-2xl`}
          >
            <div className="flex justify-center">
              <PieChartFilled />
              <div className="ml-2">Dashboard</div>
            </div>
          </div>
          <iframe
            title="test3"
            // width="1140"
            // height="541.25"
            className="h-screen w-full"
            src="https://app.powerbi.com/reportEmbed?reportId=3f2d6d66-e03f-49aa-af8c-507d50f686b0&autoAuth=true&ctid=3485b963-82ba-4a6f-810f-b5cc226ff898"
            // frameBorder="0"
            allowFullScreen={true}
          />
          <div
            className={`${styles.backgroundBottom} flex justify-end items-center h-14 px-7 rounded-br-2xl rounded-bl-2xl`}
          >
            <div className="text-xs font-medium">
              Designed by Microsoft Power BI
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
