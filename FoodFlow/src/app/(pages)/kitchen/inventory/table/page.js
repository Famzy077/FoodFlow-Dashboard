// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import Image from "next/image";
// import { Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import Filter from "@/components/inventory/Filter";
// import InventoryService from "@/services/InventoryService";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import Editform from "@/app/(pages)/kitchen/inventory/editform";
// import { useDispatch } from "react-redux";
// import { setSelectedItem } from "@/redux/features/selected_item/selectedItemSlice";
// import { useSellerDetails } from "../../../../../../(helpers)/Helpers";
// import useFetchData from "../../../../../../hooks/hooks";
// import Spinner from "@/components/indicators/Spinner";
// import { useRouter } from "next/navigation";

// const DropdownMenu = ({ onClose, onEditDetails, onViewDetails }) => {
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         onClose();
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [onClose]);

//   return (
//     <div
//       ref={dropdownRef}
//       className='absolute z-10 right-0 bg-white shadow-md rounded-lg border border-gray-200 w-32'
//     >
//       <ul>
//         <li
//           className='p-2 hover:bg-gray-100 cursor-pointer'
//           onClick={onViewDetails}
//         >
//           View Details
//         </li>
//         <li
//           className='p-2 hover:bg-gray-100 cursor-pointer'
//           onClick={onEditDetails}
//         >
//           Edit Details
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default function Page() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [activeTab, setActiveTab] = useState("all");
//   const [eventData, setEventData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
//   const [newInventory, setNewInventory] = useState(false);
//   const [selectedRowId, setSelectedRowId] = useState(null);
//   const [isEdit, setIsEdit] = useState(false);
//   const [editInventory, setEditInventory] = useState(false);
//   const [currentItem, setCurrentItem] = useState(null);
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [dropdownRowId, setDropdownRowId] = useState(null);
//   const dispatch = useDispatch();
//   const modalRef = useRef(null);
//   const { details } = useSellerDetails;
//   const { data, error } = useFetchData();
//   const [itemId, setItemId] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (searchParams.get("newInventory") === "success") {
//       setNewInventory(true);
//     }
//   }, []);

//   useEffect(() => {
//     if (newInventory) {
//       setTimeout(() => {
//         setNewInventory(false);
//       }, 3000);
//     }
//   }, [newInventory]);
//   useEffect(() => {
//     console.log("Fetched data object:", data); // Log entire data
//     if (data) {
//       // setItemId(data.data._id);
//       console.log("Item ID:");
//     }
//   }, [data]);

//   // Fetch inventory data on initial load or when activeTab changes
//   useEffect(() => {
//     async function fetchData() {
//       const token = localStorage.getItem("auth_token");
//       try {
//         setLoading(true);
//         const response = await fetch(
//           `https://dinerpro-backend-cdq6.onrender.com/inventory/me`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`Error fetching data: ${response.statusText}`);
//         }

//         const data = await response.json();
//         const newData = data.data;
//         console.log("Fetched data:", data);

//         if (newData && Array.isArray(newData)) {
//           setEventData(newData);
//           // setEventCount(newData.length);
//           setFilteredData(newData);
//           newData.forEach((item) => {
//             console.log("Item ID:", item._id);
//           });
//         } else {
//           console.error("Unexpected data format");
//         }
//       } catch (error) {
//         console.error("Error fetching inventory data:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, [activeTab, data]);

//   useEffect(() => {
//     // if (details) {
//     console.log(data, "Data");

//     // }
//   });

//   const handleSearch = (value) => {
//     const filtered = eventData.filter((event) =>
//       event.category.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };

//   const openModalForRow = (rowId) => {
//     const selectedItem = eventData.find((row) => row._id === rowId);
//     setCurrentItem(selectedItem);
//     dispatch(setSelectedItem(selectedItem));
//     setSelectedRowId(rowId);
//     setIsEdit(true);
//   };

//   const handleDelete = (rowId) => {
//     const newList = eventData.filter((row) => row._id !== rowId);
//     setEventData(newList);
//     setFilteredData(newList);
//   };

//   const closeModal = () => {
//     setSelectedRowId(null);
//     setIsEdit(false);
//   };

//   const handleEditDetails = (rowId) => {
//     const selectedItem = eventData.find((row) => row._id === rowId);
//     setCurrentItem(selectedItem);
//     setEditInventory(true);
//     setDropdownVisible(false);
//   };

//   const handleViewDetails = (rowId) => {
//     const selectedItem = eventData.find((row) => row._id === rowId);
//     setCurrentItem(selectedItem);
//     // setEditInventory(true);
//     setDropdownVisible(false);

//     // Navigate to the dynamic route with the row's id
//     router.push(`/kitchen/inventory/${rowId}`);
//   };

//   const openDropdownForRow = (rowId) => {
//     setDropdownVisible(true);
//     setDropdownRowId(rowId);
//   };

//   const closeDropdown = () => {
//     setDropdownVisible(false);
//     setDropdownRowId(null);
//   };

//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (modalRef.current && !modalRef.current.contains(e.target)) {
//         closeModal();
//       }
//     };
//     if (isEdit) {
//       document.addEventListener("mousedown", handleOutsideClick);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, [isEdit]);

//   return (
//     <>
//       {loading && (
//         <div className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50'>
//           <Spinner />
//         </div>
//       )}
//       <div className='px-8'>
//         {newInventory && (
//           <div role='alert' className='alert alert-success'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               className='stroke-current shrink-0 h-6 w-6'
//               fill='none'
//               viewBox='0 0 24 24'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='2'
//                 d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
//               />
//             </svg>
//             <span>Your inventory has been added!</span>
//           </div>
//         )}
//         <section className='border-2 w-[80vw] h-[80vh] border-zinc-400 rounded-2xl mt-10 p-6 overflow-scroll'>
//           <div className='flex items-center justify-between p-3'>
//             <ul className='border bg-primary bg-opacity-30 text-white p-2 rounded-full'>
//               <div className='flex justify-between space-x-2'>
//                 <button
//                   onClick={() => setActiveTab("all")}
//                   className={`${
//                     activeTab === "all"
//                       ? "bg-primary rounded-full px-10 py-3"
//                       : "px-10 py-3"
//                   } transition-all duration-300 ease-linear`}
//                 >
//                   All
//                 </button>

//                 <button
//                   onClick={() => setActiveTab("alerted")}
//                   className={`${
//                     activeTab === "alerted"
//                       ? "bg-primary rounded-full px-10 py-3"
//                       : "px-10 py-3"
//                   } transition-all duration-300 ease-linear`}
//                 >
//                   Limit Alerts
//                 </button>
//               </div>
//             </ul>

//             <div
//               onClick={() => document.getElementById("my_modal_2").showModal()}
//               className='flex justify-between align-center gap-5 border border-primary rounded-full py-1 px-7 text-primary hover:bg-primary hover:text-white'
//             >
//               <Image
//                 priority
//                 src='/images/inventory/filter.svg'
//                 alt='filter icon'
//                 width='24'
//                 height='24'
//               />
//               <button>Filter</button>
//             </div>
//           </div>

//           <Filter handleCategory={(category) => handleSearch(category)} />

//           <table className='w-full mt-6'>
//             <thead className='border-b-2 border-b-zinc-300'>
//               <tr>
//                 <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                   ID
//                 </th>
//                 <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                   Inventory Name
//                 </th>
//                 <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                   Category
//                 </th>
//                 <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                   Price
//                 </th>
//                 <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                   Brand
//                 </th>
//                 {/* <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                   Initial Quantity
//                 </th> */}
//                 <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                   Current Quantity
//                 </th>
//                 <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                   Quantity Alert
//                 </th>
//                 <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className='bg-white divide-y divide-gray-200 overflow-auto'>
//               {filteredData.map((row, index) => (
//                 <tr key={index} className='border-b-2'>
//                   <td className='px-6 py-4 whitespace-nowrap'>{index + 1}</td>
//                   <td className='px-6 py-4 whitespace-nowrap'>{row.name}</td>
//                   <td className='px-6 py-4 whitespace-nowrap'>
//                     {row.categories}
//                   </td>
//                   <td className='px-6 py-4 whitespace-nowrap'>{row.price}</td>
//                   <td className='px-6 py-4 whitespace-nowrap'>{row.brand}</td>
//                   {/* <td className='px-6 py-4 whitespace-nowrap'>
//                     {row.quantity}
//                   </td> */}
//                   <td className='px-6 py-4 whitespace-nowrap'>
//                     {row.quantityNumber}
//                   </td>
//                   <td className='px-6 py-4 whitespace-nowrap'>
//                     <span
//                       className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-lg ${
//                         row.minimumAlert
//                           ? "bg-[#a5d4c3] text-[#049561] border border-[#049561] py-1 px-3"
//                           : "bg-[#e9a996] text-[#BA2D02] border border-[ #BA2D02] py-1 px-5"
//                       }`}
//                     >
//                       {row.minimumAlert ? "available" : "alerted"}
//                     </span>
//                   </td>
//                   <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative'>
//                     <button onClick={() => openDropdownForRow(row._id)}>
//                       <BsThreeDotsVertical />
//                     </button>
//                     {dropdownVisible && dropdownRowId === row._id && (
//                       <DropdownMenu
//                         onClose={closeDropdown}
//                         onEditDetails={() => handleEditDetails(row._id)}
//                         onViewDetails={() => handleViewDetails(row._id)}
//                       />
//                     )}
//                   </td>
//                 </tr>
//               ))}
//               {filteredData.length === 0 && (
//                 <tr>
//                   <td colSpan='8' className='text-center py-4'>
//                     No data available
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </section>
//       </div>

//       <Editform
//         isVisible={editInventory}
//         onClose={() => setEditInventory(false)}
//         data={currentItem || {}}
//       />
//     </>
//   );
// }


"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Suspense } from "react"; // Import Suspense
import { useSearchParams } from "next/navigation";
import Filter from "@/components/inventory/Filter";
import InventoryService from "@/services/InventoryService";
import { BsThreeDotsVertical } from "react-icons/bs";
import Editform from "@/app/(pages)/kitchen/inventory/editform";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "@/redux/features/selected_item/selectedItemSlice";
import { useSellerDetails } from "../../../../../../(helpers)/Helpers";
import useFetchData from "../../../../../../hooks/hooks";
import Spinner from "@/components/indicators/Spinner";
import { useRouter } from "next/navigation";

// Move the component that uses useSearchParams into a separate component
function TableComponent() {
  const searchParams = useSearchParams();
  const [newInventory, setNewInventory] = useState(false);

  useEffect(() => {
    if (searchParams.get("newInventory") === "success") {
      setNewInventory(true);
    }
  }, [searchParams]);

  useEffect(() => {
    if (newInventory) {
      setTimeout(() => {
        setNewInventory(false);
      }, 3000);
    }
  }, [newInventory]);

  return (
    <>
      {newInventory && (
        <div role='alert' className='alert alert-success'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='stroke-current shrink-0 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>Your inventory has been added!</span>
        </div>
      )}
    </>
  );
}

// Main Page Component
export default function Page() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");
  const [eventData, setEventData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editInventory, setEditInventory] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownRowId, setDropdownRowId] = useState(null);
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const { details } = useSellerDetails;
  const { data, error } = useFetchData();
  const [itemId, setItemId] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch inventory data on initial load or when activeTab changes
  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem("auth_token");
      try {
        setLoading(true);
        const response = await fetch(
          // `https://dinerpro-backend-cdq6.onrender.com/inventory/me`,
          `http://localhost:5000/inventory/me`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const data = await response.json();
        const newData = data.data;
        console.log("Fetched data:", data);

        if (newData && Array.isArray(newData)) {
          setEventData(newData);
          setFilteredData(newData);
          newData.forEach((item) => {
            console.log("Item ID:", item._id);
          });
        } else {
          console.error("Unexpected data format");
        }
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [activeTab, data]);

  const handleSearch = (value) => {
    const filtered = eventData.filter((event) =>
      event.category.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const openModalForRow = (rowId) => {
    const selectedItem = eventData.find((row) => row._id === rowId);
    setCurrentItem(selectedItem);
    dispatch(setSelectedItem(selectedItem));
    setSelectedRowId(rowId);
    setIsEdit(true);
  };

  const handleDelete = (rowId) => {
    const newList = eventData.filter((row) => row._id !== rowId);
    setEventData(newList);
    setFilteredData(newList);
  };

  const closeModal = () => {
    setSelectedRowId(null);
    setIsEdit(false);
  };

  const handleEditDetails = (rowId) => {
    const selectedItem = eventData.find((row) => row._id === rowId);
    setCurrentItem(selectedItem);
    setEditInventory(true);
    setDropdownVisible(false);
  };

  const handleViewDetails = (rowId) => {
    const selectedItem = eventData.find((row) => row._id === rowId);
    setCurrentItem(selectedItem);
    setDropdownVisible(false);
    router.push(`/kitchen/inventory/${rowId}`);
  };

  const openDropdownForRow = (rowId) => {
    setDropdownVisible(true);
    setDropdownRowId(rowId);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
    setDropdownRowId(null);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    if (isEdit) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isEdit]);

  return (
    <>
      {loading && (
        <div className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50'>
          <Spinner />
        </div>
      )}
      <div className='px-8'>
        {/* Wrap TableComponent in Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <TableComponent />
        </Suspense>

        <section className='border-2 w-[80vw] h-[80vh] border-zinc-400 rounded-2xl mt-10 p-6 overflow-scroll'>
          {/* Rest of your code */}
        </section>
      </div>

      <Editform
        isVisible={editInventory}
        onClose={() => setEditInventory(false)}
        data={currentItem || {}}
      />
    </>
  );
}