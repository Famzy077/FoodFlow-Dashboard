// // "use client";
// // import React, { useRef, useState, useEffect } from "react";
// // import Card from "./Card";
// // import { AiOutlineSetting } from "react-icons/ai";
// // import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
// // import Link from "next/link";
// // import { categories } from "../../../utils/categoriesData";
// // import { SquarePen } from "lucide-react";
// // import { useSelector } from "react-redux";

// // export default function FoodContainer() {
// //   const addMenuItems = useSelector((store) => store.addMenu);
// //   const [selectedCategory, setSelectedCategory] = useState("All");
// //   const [searchKeyword, setSearchKeyword] = useState(""); // State for search keyword

// //   // Refs for sliders
// //   const sliderRef = useRef(null);
// //   const catSliderRef = useRef(null);

// //   // Slide functions for menu items
// //   const slideLeft = () => {
// //     if (sliderRef.current) {
// //       sliderRef.current.scrollBy({ left: -500, behavior: "smooth" });
// //     }
// //   };

// //   const slideRight = () => {
// //     if (sliderRef.current) {
// //       sliderRef.current.scrollBy({ left: 500, behavior: "smooth" });
// //     }
// //   };

// //   // Slide functions for categories
// //   const catSlideLeft = () => {
// //     if (catSliderRef.current) {
// //       catSliderRef.current.scrollBy({ left: -500, behavior: "smooth" });
// //     }
// //   };

// //   const catSlideRight = () => {
// //     if (catSliderRef.current) {
// //       catSliderRef.current.scrollBy({ left: 500, behavior: "smooth" });
// //     }
// //   };

// //   // Log data for debugging
// //   useEffect(() => {
// //     ////console.log("addMenuItems:", addMenuItems);
// //   }, [addMenuItems]);

// //   // Filter menu items based on selected category
// //   const filteredMenuItems =
// //   selectedCategory === "All"
// //     ? addMenuItems
// //     : addMenuItems.filter((item) => {
// //       if (!item || !item.category) return false;  // Safeguard for undefined items
// //       if (Array.isArray(item.category)) {
// //         return item.category.some((cat) =>
// //           cat.toLowerCase().includes(selectedCategory.toLowerCase())
// //         );
// //       } else {
// //         return item.category
// //         .toLowerCase()
// //         .includes(selectedCategory.toLowerCase());
// //       }
// //     });

// //     const filterSearch = addMenuItems.filter((item) => {
// //       const matchesSearchKeyword =
// //       searchKeyword === "" ||
// //       item.itemName.toLowerCase().includes(searchKeyword.toLowerCase());

// //       return matchesSearchKeyword;
// //     })

// //     const generateMenuCards = () => {
// //       return filterSearch.map((item, i) => <MenuCard key={i} menuItem={item} />);
// //     };
    
// //     //  filteredMenuItems = addMenuItems.filter((item) => {
// //     // // Convert item.category to a string and handle cases where it's undefined or null
// //     // const itemCategory = String(item.category || "").trim().toLowerCase();
// //     // const selectedCategoryNormalized = selectedCategory.trim().toLowerCase();

// //     // const matchesCategory =
// //     //   selectedCategory === "All" || itemCategory === selectedCategoryNormalized;

// //     // const matchesSearchKeyword =
// //     //   searchKeyword === "" ||
// //     //   item.itemName.toLowerCase().includes(searchKeyword.toLowerCase());

// //     // return matchesCategory && matchesSearchKeyword;
// //   // });


// //   return (
// //     <div className="relative p-2 flex flex-col border border-secondary rounded-lg w-[60%] h-[fit-content] mb-">
// //       <div className="flex items-center justify-between p-8">
// //         <div className="font-semibold absolute -top-16 leading-none">
// //           <h1 className="text-3xl font-bold flex items-center">
// //             Order <SquarePen className="text-4xl mt-[6px] ml-2" />
// //           </h1>
// //           <span>Create new order</span>
// //         </div>
// //         <h1 className="text-lg font-semibold">My Menu</h1>
// //         <Link href="/menu/menu_settings">
// //           <div className="flex items-center text-2xl gap-2 p-2 rounded-lg hover:bg-primary font-bold">
// //             <AiOutlineSetting size={22} />
// //             <span className="text-sm">Menu Settings</span>
// //           </div>
// //         </Link>
// //       </div>
// //       <div>
// //           <input
// //           type="text"
// //           placeholder="Search menu"
// //           className="border border-secondary rounded-[40px] w-[280px] h-[37px] p-2 outline-none focus:ring-2 focus:ring-primary"
// //           value={searchKeyword} // Bind the input value to searchKeyword state
// //           onChange={(e) => setSearchKeyword(e.target.value)} // Update searchKeyword when typing
// //         />
// //       </div>
// //       <div className="flex items-center p-2 relative">
// //         {/* Left arrow for categories */}
// //         <BiLeftArrow
// //           onClick={catSlideLeft}
// //           className="absolute -left-7 border border-zinc-400 shadow-md top-1/2 transform -translate-y-1/2 bg-white p-2 text-3xl rounded-full cursor-pointer"
// //         />

// //         {/* Categories slider */}
// //         <div
// //           id="cat_slider"
// //           ref={catSliderRef}
// //           className="my-1 flex overflow-x-auto relative scrollbar-hide scroll scroll-smooth"
// //         >
// //           {/* Render categories */}
// //           {categories.map((category) => (
// //             <div
// //               key={category.id} // Make sure category.id is unique and defined
// //               className={`px-3 text-xl py-2 my-2 rounded-lg mx-2 w-full whitespace-nowrap shadow-lg cursor-pointer ${
// //                 selectedCategory === category.name ? "bg-primary text-white" : "text-primary"
// //               }`}
// //               onClick={() => setSelectedCategory(category.name)}
// //             >
// //               {category.name}
// //             </div>
// //           ))}

// //         </div>

// //         {/* Right arrow for categories */}
// //         <BiRightArrow
// //           onClick={catSlideRight}
// //           className="absolute -right-7 border border-zinc-400 shadow-md top-1/2 transform -translate-y-1/2 bg-white p-2 text-3xl rounded-full cursor-pointer"
// //         />
// //       </div>

// //       <div className="relative">
// //         {/* Left arrow for menu items */}
// //         <BiLeftArrow
// //           onClick={slideLeft}
// //           className="absolute -left-7 border border-zinc-400 shadow-md top-1/2 transform -translate-y-1/2 bg-white p-2 text-3xl rounded-full cursor-pointer"
// //         />

// //         {/* Menu items slider */}
// //         <div
// //           ref={sliderRef}
// //           className="whitespace-nowrap grid grid-cols-3 gap-3 scroll-smooth scrollbar-hide overflow-x-auto"
// //         >
// //           {/* Render filtered menu items */}
// //           {filteredMenuItems.map((menuItem, index) => (
// //             <Card key={menuItem.id || index} food={menuItem} />
// //           ))}

// //         </div>

// //         {/* Right arrow for menu items */}
// //         <BiRightArrow
// //           onClick={slideRight}
// //           className="absolute -right-7 border border-zinc-400 shadow-md top-1/2 transform -translate-y-1/2 bg-white p-2 text-3xl rounded-full cursor-pointer"
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import Card from "./Card";
// import { AiOutlineSetting } from "react-icons/ai";
// import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
// import Link from "next/link";
// import { categories } from "../../../utils/categoriesData";
// import { SquarePen } from "lucide-react";
// import { useSelector } from "react-redux";

// export default function FoodContainer() {
//   const addMenuItems = useSelector((store) => store.addMenu);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchKeyword, setSearchKeyword] = useState(""); // State for search keyword

//   // Refs for sliders
//   const sliderRef = useRef(null);
//   const catSliderRef = useRef(null);

//   // Slide functions for menu items
//   const slideLeft = () => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollBy({ left: -500, behavior: "smooth" });
//     }
//   };

//   const slideRight = () => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollBy({ left: 500, behavior: "smooth" });
//     }
//   };

//   // Slide functions for categories
//   const catSlideLeft = () => {
//     if (catSliderRef.current) {
//       catSliderRef.current.scrollBy({ left: -500, behavior: "smooth" });
//     }
//   };

//   const catSlideRight = () => {
//     if (catSliderRef.current) {
//       catSliderRef.current.scrollBy({ left: 500, behavior: "smooth" });
//     }
//   };

//   // Log data for debugging
//   useEffect(() => {
//     //console.log("addMenuItems:", addMenuItems);
//   }, [addMenuItems]);

//   // Filter menu items based on selected category and search keyword
//   const filteredMenuItems = addMenuItems.filter((item) => {
//     // Safeguard for undefined items
//     if (!item || !item.itemName || !item.category) return false;

//     // Filter by category
//     const matchesCategory =
//       selectedCategory === "All" ||
//       (Array.isArray(item.category)
//         ? item.category.some((cat) =>
//             cat.toLowerCase().includes(selectedCategory.toLowerCase())
//           )
//         : item.category.toLowerCase().includes(selectedCategory.toLowerCase()));

//     // Filter by search keyword
//     const matchesSearchKeyword =
//       searchKeyword === "" ||
//       item.itemName.toLowerCase().includes(searchKeyword.toLowerCase());

//     // Return true only if both filters match
//     return matchesCategory && matchesSearchKeyword;
//   });

//   // Generate menu cards for the filtered items
//   const generateMenuCards = () => {
//     return filteredMenuItems.map((item, i) => <Card key={i} food={item} />);
//   };

//   return (
//     <div className="relative p-2 flex flex-col border border-secondary rounded-lg w-[60%] h-[fit-content]">
//       <div className="flex items-center justify-between p-8">
//         <div className="font-semibold absolute -top-16 leading-none">
//           <h1 className="text-3xl font-bold flex items-center">
//             Order <SquarePen className="text-4xl mt-[6px] ml-2" />
//           </h1>
//           <span>Create new order</span>
//         </div>
//         <h1 className="text-lg font-semibold">My Menu</h1>
//         <Link href="/menu/menu_settings">
//           <div className="flex items-center text-2xl gap-2 p-2 rounded-lg hover:bg-primary font-bold">
//             <AiOutlineSetting size={22} />
//             <span className="text-sm">Menu Settings</span>
//           </div>
//         </Link>
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Search menu"
//           className="border border-secondary rounded-[40px] w-[280px] h-[37px] p-2 outline-none focus:ring-2 focus:ring-primary"
//           value={searchKeyword} // Bind the input value to searchKeyword state
//           onChange={(e) => setSearchKeyword(e.target.value)} // Update searchKeyword when typing
//         />
//       </div>
//       <div className="flex items-center p-2 relative">
//         {/* Left arrow for categories */}
//         <BiLeftArrow
//           onClick={catSlideLeft}
//           className="absolute -left-7 border border-zinc-400 shadow-md top-1/2 transform -translate-y-1/2 bg-white p-2 text-3xl rounded-full cursor-pointer"
//         />

//         {/* Categories slider */}
//         <div
//           id="cat_slider"
//           ref={catSliderRef}
//           className="my-1 flex overflow-x-auto relative scrollbar-hide scroll scroll-smooth"
//         >
//           {/* Render categories */}
//           {categories.map((category) => (
//             <div
//               key={category.id} // Make sure category.id is unique and defined
//               className={`px-3 text-xl py-2 my-2 rounded-lg mx-2 w-full whitespace-nowrap shadow-lg cursor-pointer ${
//                 selectedCategory === category.name ? "bg-primary text-white" : "text-primary"
//               }`}
//               onClick={() => setSelectedCategory(category.name)}
//             >
//               {category.name}
//             </div>
//           ))}
//         </div>

//         {/* Right arrow for categories */}
//         <BiRightArrow
//           onClick={catSlideRight}
//           className="absolute -right-7 border border-zinc-400 shadow-md top-1/2 transform -translate-y-1/2 bg-white p-2 text-3xl rounded-full cursor-pointer"
//         />
//       </div>

//       <div className="relative">
//         {/* Left arrow for menu items */}
//         <BiLeftArrow
//           onClick={slideLeft}
//           className="absolute -left-7 border border-zinc-400 shadow-md top-1/2 transform -translate-y-1/2 bg-white p-2 text-3xl rounded-full cursor-pointer"
//         />

//         {/* Menu items slider */}
//         <div
//           ref={sliderRef}
//           className="whitespace-nowrap grid grid-cols-3 gap-3 scroll-smooth scrollbar-hide overflow-x-auto m-5"
//         >
//           {/* Render filtered menu items */}
//           {filteredMenuItems.map((menuItem, index) => (
//             <Card key={menuItem.id || index} food={menuItem} />
//           ))}
//         </div>

//         {/* Right arrow for menu items */}
//         <BiRightArrow
//           onClick={slideRight}
//           className="absolute -right-7 border border-zinc-400 shadow-md top-1/2 transform -translate-y-1/2 bg-white p-2 text-3xl rounded-full cursor-pointer"
//         />
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useRef, useState, useEffect } from "react";
import Card from "./Card";
import { AiOutlineSetting } from "react-icons/ai";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import Link from "next/link";
import { categories } from "../../../utils/categoriesData";
import { SquarePen } from "lucide-react";
import { useSelector } from "react-redux";

export default function FoodContainer() {
  const addMenuItems = useSelector((store) => store.addMenu);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState(""); // State for search keyword

  // Refs for sliders
  const sliderRef = useRef(null);
  const catSliderRef = useRef(null);

  // Slide functions for menu items
  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  // Slide functions for categories
  const catSlideLeft = () => {
    if (catSliderRef.current) {
      catSliderRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const catSlideRight = () => {
    if (catSliderRef.current) {
      catSliderRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  // Log data for debugging
  useEffect(() => {
    //console.log("addMenuItems:", addMenuItems);
  }, [addMenuItems]);

  // Filter menu items based on selected category and search keyword
  const filteredMenuItems = addMenuItems.filter((item) => {
   
    if (!item || !item.itemName || !item.category) return false;

    // Filter by category
    const matchesCategory =
      selectedCategory === "All" ||
      (Array.isArray(item.category)
        ? item.category.some((cat) =>
            cat.toLowerCase().includes(selectedCategory.toLowerCase())
          )
        : item.category.toLowerCase().includes(selectedCategory.toLowerCase()));

    // Filter by search keyword
    const matchesSearchKeyword =
      searchKeyword === "" ||
      item.itemName.toLowerCase().includes(searchKeyword.toLowerCase());


    return matchesCategory && matchesSearchKeyword;
  });

  // Generate menu cards for the filtered items
  const generateMenuCards = () => {
    return filteredMenuItems.map((item, i) => <Card key={i} food={item} />);
  };

  return (
    <div className="relative p-2 flex flex-col border border-secondary rounded-lg w-[60%] h-[fit-content]">
      <div className="flex items-center justify-between p-8">
        <div className="font-semibold absolute -top-16 leading-none">
          <h1 className="text-3xl font-bold flex items-center">
            Order <SquarePen className="text-4xl mt-[6px] ml-2" />
          </h1>
          <span>Create new order</span>
        </div>
        <h1 className="text-lg font-semibold">My Menu</h1>
        <Link href="/menu/menu_settings">
          <div className="flex items-center text-2xl gap-2 p-2 rounded-lg hover:bg-primary font-bold">
            <AiOutlineSetting size={22} />
            <span className="text-sm">Menu Settings</span>
          </div>
        </Link>
      </div>
      
      {/* Search bar */}
      <div>
        <input
          type="text"
          placeholder="Search menu"
          className="border border-secondary rounded-[40px] w-[280px] h-[37px] p-2 outline-none focus:ring-2 focus:ring-primary"
          value={searchKeyword} // Bind the input value to searchKeyword state
          onChange={(e) => setSearchKeyword(e.target.value)} // Update searchKeyword when typing
        />
      </div>

      {/* Categories Slider */}
      <div className="flex items-center p-2 relative">
        {/* Left arrow for categories */}
        <BiLeftArrow
          onClick={catSlideLeft}
          className="absolute -left-7 border border-zinc-400 shadow-md top-1/2 transform -translate-y-1/2 bg-white p-2 text-3xl rounded-full cursor-pointer"
        />

        {/* Categories slider */}
        <div
          id="cat_slider"
          ref={catSliderRef}
          className="my-1 flex overflow-x-auto relative scrollbar-hide scroll scroll-smooth"
        >
          {/* Render categories */}
          {categories.map((category) => (
            <div
              key={category.id}
              className={`px-3 text-xl py-2 my-2 rounded-lg mx-2 w-full whitespace-nowrap shadow-lg cursor-pointer ${
                selectedCategory === category.name
                  ? "bg-primary text-white"
                  : "text-primary"
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </div>
          ))}
        </div>

        {/* Right arrow for categories */}
        <BiRightArrow
          onClick={catSlideRight}
          className="absolute -right-7 border border-zinc-400 shadow-md top-1/2 transform -translate-y-1/2 bg-white p-2 text-3xl rounded-full cursor-pointer"
        />
      </div>

      {/* Menu Items Slider */}
      <div className="relative">
        {/* Left arrow for menu items */}
        <BiLeftArrow
          onClick={slideLeft}
          className="absolute -left-7 border border-zinc-400 shadow-md top-1/2 transform -translate-y-1/2 bg-white p-2 text-3xl rounded-full cursor-pointer"
        />

        {/* Menu items slider */}
        <div
          ref={sliderRef}
          className="whitespace-nowrap grid grid-cols-3 gap-3 scroll-smooth scrollbar-hide overflow-x-auto"
        >
          {generateMenuCards()}
        </div>

        {/* Right arrow for menu items */}
        <BiRightArrow
          onClick={slideRight}
          className="absolute -right-7 border border-zinc-400 shadow-md top-1/2 transform -translate-y-1/2 bg-white p-2 text-3xl rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}
