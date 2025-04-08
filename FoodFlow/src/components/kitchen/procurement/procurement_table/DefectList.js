import React from "react";
import { defectReportData } from "../../../../utils/defectReportData";

const DefectList = (props) => {
  //   const categories = props.categories;
  const handleDefectModalOpen = props.handleDefectModalOpen;
  const brand = props.brand ? props.brand : "";

  return (
    <div className="">
      {defectReportData[0] ? (
        defectReportData.map((item, key) => (
          <div className="flex justify-between mb-2">
            <aside>
              <h1>Defect {key + 1} </h1>
              <p>Title of defect : {item.title}</p>
              <p> Quantity affected: {item.quantity}</p>
              <p>Report date: {item.date}</p>
              <p>Last updated: {item.date}</p>
            </aside>
            <aside>
              {key === 0 && (
                <button
                  className="bg-primary p-3 rounded-lg shadow-lg"
                  onClick={handleDefectModalOpen}
                >
                  add defect
                </button>
              )}
            </aside>
          </div>
        ))
      ) : (
        <div className="flex justify-between mb-2">
          <div className="font-bold">{brand}</div>
          <button
            className="bg-primary p-3 rounded-lg shadow-lg"
            onClick={handleDefectModalOpen}
          >
            add defect
          </button>
        </div>
      )}
    </div>
  );
};

export default DefectList;
