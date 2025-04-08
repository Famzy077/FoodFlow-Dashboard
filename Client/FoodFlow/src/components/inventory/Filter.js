import React from "react";
import CategoryList from "./CategoryList";

const Filter = (props) => {
  const handleCategory = props.handleCategory;

  return (
    <div className="">
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div className="h-[650px] bg-white flex flex-col justify-between ...">
            <p className="text-[#55656F] text-[32px] font-semibold mb-3">
              Filter
            </p>

            <div className="mt-[-300px]">
              <p className="text-[#55656F] text-[16px] font-medium">
                Filter category
              </p>

              <CategoryList handleCategory={handleCategory} />
            </div>

            <div className="">
              <p className="text-[#55656F] text-[16px] font-medium mt-2">
                Filter search
              </p>

              <div className="border rounded-[100px] hover:bg-primary hover:text-white font-semibold text-[#55656F] h-[48px] w-[211px] text-[16px] px-6 py-2 m-2">
                Search keyword
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Filter;
