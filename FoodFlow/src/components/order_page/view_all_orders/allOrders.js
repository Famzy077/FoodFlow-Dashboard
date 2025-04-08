"use client";
import React from "react";
import pageIndexStyles from "../../styles/pageIndex.module.css";
import ReactTable from "./reactTable";

export default function AllOrders() {
  return (
    <div className={pageIndexStyles.main}>
      <ReactTable />
    </div>
  );
}
