"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../navbar/sidebar";
import Topbar from "../navbar/topbar";

export default function MainLayout({ children }) {
  const [data, setData]= useState('visitor')
  useEffect(() => {
    const myData = JSON.parse(window.localStorage.getItem("my-data"));
    if(myData)setData(myData);
  }, []);

  return (
    <div className="flex flex-col h-full w-full">
      <Topbar data={data} />
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
