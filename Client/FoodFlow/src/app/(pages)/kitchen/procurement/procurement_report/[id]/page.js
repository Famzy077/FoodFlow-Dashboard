"use client";
import ProcurementReport from "@/components/kitchen/procurement/ProcurementReport";
import React from "react";

export default function page(props) {
  //console.log("Here");
  //console.log("Props", props);
  const id = props.params.id ? props.params.id : null;
  //console.log("Id", id);
  return (
    <div>
      <ProcurementReport id={id} />
    </div>
  );
}
