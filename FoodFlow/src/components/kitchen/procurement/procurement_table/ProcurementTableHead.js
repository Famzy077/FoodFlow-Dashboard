import React from "react";

export default function ProcurementTableHead() {
  return (
    <React.Fragment>
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-base font-semibold text-gray-500 uppercase tracking-wider"
          >
            ID
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-base font-semibold text-gray-500 uppercase tracking-wider"
          >
            Item Name
          </th>
          {/* <th
            scope="col"
            className="px-6 py-3 text-left text-base font-semibold text-gray-500 uppercase tracking-wider"
          >
            Category
          </th> */}
          <th
            scope="col"
            className="px-6 py-3 text-left text-base font-semibold text-gray-500 uppercase tracking-wider"
          >
            Brand
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-base font-semibold text-gray-500 uppercase tracking-wider"
          >
            Quantity
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-base font-semibold text-gray-500 uppercase tracking-wider"
          >
            Recipient's Email
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-base font-semibold text-gray-500 uppercase tracking-wider"
          >
            Status
          </th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
    </React.Fragment>
  );
}
