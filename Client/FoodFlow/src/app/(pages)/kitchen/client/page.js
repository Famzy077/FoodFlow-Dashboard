import React from "react";
import Client_detail from "./client_detail";
import Client_history from "./client_history";

export default function Page() {
  return (
    <>
    {/* client detail top */}
    <div className="absolute top-[-2.9rem]">
      <h1 className=" font-bold text-3xl">Client</h1>
    </div>
    <Client_detail />
    {/* client history bottom */}
    <Client_history />

    </>
  );
}
