import React from "react";
import { categories } from "../../utils/categoriesData";
// import { categories } from "../../../../utils/categoriesData";

const CategoryList = (props) => {
  //   const categories = props.categories;

  return (
    <div className="flex flex-wrap">
      {categories ? (
        categories.map((item, key) => (
          <div
            className="border rounded-[100px] hover:bg-primary hover:text-white font-semibold text-[#55656F] text-[16px] px-6 py-2 m-2"
            onClick={() => props.handleCategory(item.name.toLowerCase())}
            key={key}
          >
            {item.name}
          </div>
        ))
      ) : (
        <div></div>
      )}
      {}
    </div>
  );
};

export default CategoryList;
