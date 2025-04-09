"use client";
import React, { useState } from "react";
//redux
import { openModal } from "@/redux/features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
//components
import DefectReportModal from "./DefectReportModal";
import SupplierReport from "./SupplierReport";
import AddSupplierModal from "./AddSupplierModal";
import ShareReportModal from "./ShareReportModal";
import ViewAllupdate from "./ViewAllupdate";
import DefectList from "./procurement_table/DefectList";
import {
  supplierComments,
  defectComments,
} from "../../../utils/commentsData";

export default function ProcurementReport(props) {
  const dispatch = useDispatch();
  const procumentId = props.id ? props.id : null;
  const [displayReport, setDisplayReport] = useState("defect");
  const [isDefectModalOpen, setIsDefectModalOpen] = useState(false);
  const [isAddSupplierModalOpen, setIsAddSupplierModalOpen] = useState(false);
  const [isShareReportModalOpen, setIsShareReportModalOpen] = useState(false);
  const [isViewUpdateModalOpen, setIsViewUpdateModalOpen] = useState(false);

  const selectedItem = useSelector((state) => state.selectedItem);

  let pDate = selectedItem ? new Date(selectedItem.createdAt) : "";
  pDate = selectedItem.createdAt;
  //console.log("P date", pDate);
  //console.log("Selected item", selectedItem);
  // view update modal
  const handleUpdateModalOpen = () => {
    dispatch(openModal());
    setIsViewUpdateModalOpen(true);
  };

  const handleCloseViewUpdateModal = () => {
    setIsViewUpdateModalOpen(false);
  };

  // share report modal
  const handleSharReportModalOpen = () => {
    dispatch(openModal());
    setIsShareReportModalOpen(true);
  };

  const handleCloseShareReportModal = () => {
    setIsShareReportModalOpen(false);
  };

  const handleAddSupplierModalOpen = () => {
    dispatch(openModal());
    setIsAddSupplierModalOpen(true);
  };

  const handleCloseAddSupplierModal = () => {
    // Add logic to close the modal here

    setIsAddSupplierModalOpen(false);
  };

  const handleDefectModalOpen = () => {
    dispatch(openModal());
    setIsDefectModalOpen(true);
  };

  const handleCloseDefectModal = () => {
    // Add logic to close the modal here

    setIsDefectModalOpen(false);
  };

  return (
    <div className="px-12">
      <div className="p-12 border w-full h-[829px] border-secondary rounded-lg">
        <section>
          <div className="flex justify-between">
            <div>
              <h1 className="font-medium">
                <span>Procurement </span>#
                {selectedItem ? selectedItem._id : "N/A"}{" "}
                <span className="font-medium text-secondary">
                  {selectedItem ? pDate : "N/A"}
                </span>
              </h1>
            </div>
            <div>
              <span
                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  selectedItem.status === "successful"
                    ? "bg-green-100 p-3 rounded-lg shadow-lg mr-2 text-green-800 border border-green-800 p-1"
                    : "bg-[#FFA902] p-3 rounded-lg shadow-lg mr-2 text-[#5e4a22] border border-[#5e4a22] p-1"
                }`}
              >
                {selectedItem ? selectedItem.status : "N/A"}
              </span>
              {/* <span className="mr-2">
                {selectedItem ? selectedItem.status : "N/A"}
              </span> */}
              <button
                className="bg-primary p-3 rounded-lg shadow-lg"
                onClick={handleSharReportModalOpen}
              >
                share report
              </button>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-10">
            <div>
              <h1 className="text-secondary font-medium">Item Name</h1>
              <h1 className="font-bold">
                {selectedItem ? selectedItem.itemName : "N/A"}
              </h1>
            </div>
            <div>
              <h1 className="text-secondary font-medium">Brand</h1>
              <h1 className="font-bold">
                {selectedItem ? selectedItem.brand : "N/A"}
              </h1>
            </div>
            <div>
              <h1 className="text-secondary font-medium">
                Stock turnover circle
              </h1>
              <h1 className="font-bold">
                {selectedItem ? selectedItem.quantityNumber : "N/A"}
              </h1>
            </div>
            <div>
              <h1 className="text-secondary font-medium">Quantity</h1>
              <h1 className="font-bold">
                {selectedItem ? selectedItem.quantityNumber : "N/A"}{" "}
                {selectedItem ? selectedItem.quantityUnit : "N/A"}
              </h1>
            </div>

            <div>
              <h1 className="text-secondary font-medium">Recipient email</h1>
              <h1 className="font-bold">
                {selectedItem ? selectedItem.recipient_email : "N/A"}
              </h1>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <div className="flex items-center justify-center text-center space-x-4">
            <div className="w-1/2">
              <button
                onClick={() => setDisplayReport("defect")}
                className={`${
                  displayReport === "defect"
                    ? "border-primary text-primary"
                    : "bg-gray-300 text-gray-700 hover:border-primary"
                } py-2 rounded-tl-lg rounded-bl-lg w-full border shadow-lg`}
              >
                Defect report
              </button>
            </div>
            <div className="w-1/2">
              <button
                onClick={() => setDisplayReport("supplier")}
                className={`${
                  displayReport === "supplier"
                    ? "border-primary text-primary"
                    : "bg-gray-300 text-gray-700 hover:border-primary"
                } py-2 rounded-tr-lg rounded-br-lg w-full border shadow-lg`}
              >
                Supplier report
              </button>
            </div>
          </div>
        </section>
        {/* Content for both reports */}
        <section className="mt-10 p-10">
          {displayReport === "defect" && (
            <div>
              <DefectList
                handleDefectModalOpen={handleDefectModalOpen}
                brand={selectedItem.brand}
              />
              {/* <div className="flex justify-between">
                <aside>
                  <h1>Defect 1 </h1>
                  <p>Title of defect : Enter defect title</p>
                  <p> Quantity affected: 5 bottles</p>
                  <p>Report date: DD-MM-YYYY</p>
                  <p>Last updated: DD-MM-YYY</p>
                </aside>
                <aside>
                  <button
                    className="bg-primary p-3 rounded-lg shadow-lg"
                    onClick={handleDefectModalOpen}
                  >
                    add defect
                  </button>
                </aside>
              </div> */}

              <div className="flex justify-between border rounded p-10 h-[119px] mt-20">
                <aside>
                  <h1>last defect update</h1>
                  <p>Enter description</p>
                </aside>
                <aside>
                  <button
                    className="bg-primary p-3 rounded-lg shadow-lg"
                    onClick={handleUpdateModalOpen}
                  >
                    view all updates
                  </button>
                </aside>
              </div>
            </div>
          )}
          {displayReport === "supplier" && (
            <div>
              <div className="flex justify-between mb-5">
                <h1 className="font-bold">
                  {selectedItem ? selectedItem.brand : "N/A"}
                </h1>
                <div>
                  <button
                    className="bg-primary p-3 rounded-lg shadow-lg"
                    onClick={handleAddSupplierModalOpen}
                  >
                    add supplier
                  </button>
                </div>
              </div>
              <SupplierReport />
            </div>
          )}
        </section>
      </div>
      {isDefectModalOpen && (
        <DefectReportModal handleCloseDefectModal={handleCloseDefectModal} />
      )}
      {isAddSupplierModalOpen && (
        <AddSupplierModal
          handleCloseAddSupplierModal={handleCloseAddSupplierModal}
          currentProcurement={selectedItem}
        />
      )}
      {isShareReportModalOpen && (
        <ShareReportModal
          handleCloseShareReportModal={handleCloseShareReportModal}
        />
      )}
      {isViewUpdateModalOpen && (
        <ViewAllupdate
          handleCloseViewUpdateModal={handleCloseViewUpdateModal}
          commentsData={defectComments}
        />
      )}
    </div>
  );
}
