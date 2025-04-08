import React from "react";
import { supplierReport } from "../../../utils/supplierReportData";

export default function SupplierReport() {
  return (
    <div>
      {supplierReport.map((supplier) => (
        <div key={supplier.id}>
          <div className="grid grid-cols-3 gap-10">
            <div>
              <h1 className="text-secondary font-medium">
                Representatives Name
              </h1>
              <p className="font-medium">{supplier.name}</p>
            </div>
            <div>
              <h1 className="text-secondary font-medium">Rep. phone number</h1>
              <p className="font-medium">{supplier.phone}</p>
            </div>
            <div>
              <h1 className="text-secondary font-medium">Company address</h1>
              <p className="font-medium">{supplier.address}</p>
            </div>
            <div>
              <h1 className="text-secondary font-medium">Rep. email address</h1>
              <p className="font-medium">{supplier.email}</p>
            </div>
            <div>
              <h1 className="text-secondary font-medium">
                Company phone number
              </h1>
              <p className="font-medium">{supplier.companyPhone}</p>
            </div>
            <div>
              <h1 className="text-secondary font-medium">
                Company email address
              </h1>
              <p className="font-medium">{supplier.companyEmail}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-5">
        <div className="border border-secondary w-[722px] h-[150px] flex justify-center rounded-lg">
          <div className="flex items-center text-center gap-3">
            <textarea
              name="comments"
              placeholder="write a comment on this procurement"
              className="border-l-0 border-t-0 border-b-0 border-r-2 border-secondary w-[600px] h-[136px]"
            ></textarea>
            <button className="bg-secondary w-[100px] h-[58px]">post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
