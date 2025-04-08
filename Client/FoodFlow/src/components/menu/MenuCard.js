// import { useState, Suspense, lazy } from "react";
// import Image from "next/image";
// import CurrencyFormatter from "../../utils/formatCurrency";
// import { useDispatch } from "react-redux";
// // import image from "/public/images/brand_logo/logo1.png";
// import { deleteMenu, editMenu } from "@/redux/features/addMenu/addMenuSlice";
// import { RiDeleteBin6Line } from "react-icons/ri";

// const EditMenuModal = lazy(() => import("./EditMenuModal"));

// export default function MenuCard({ menuItem }) {
//   const dispatch = useDispatch();
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleUpdateItem = (editedValues) => {
//     dispatch(editMenu(editedValues));
//   };

//   const handleDeleteItem = (itemId) => {
//     dispatch(deleteMenu({ id: itemId }));
//   };
  
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };
//   let image = "https://feelgoodfoodie.net/wp-content/uploads/2020/07/Jollof-Rice-4.jpg";

//   return (
//   <div className="z-10">
//     <div className="rounded-2xl -inset-0 border-secondary shadow-lg border z-10">
//       <div>
//         <Image
//           className="object-cover w-[100%] h-[7.8rem] rounded-tl-2xl rounded-tr-2xl border block"
//           src={menuItem.selectedPicture || image}
//           alt={menuItem.itemName}
//           width={300}
//           height={200}
//         />
//       </div>
//       <div className="items-start justify-between p-2 font-bold">
//         <div className="flex space-y-2 justify-between">
//           <div>
//             <p className="text-[1.2rem]">{menuItem.itemName}</p>
//             <p className="text-[.9rem]">
//               <CurrencyFormatter value={menuItem.price} />
//             </p>
//           </div>
//           <button
//             className="cursor-pointer"
//             onClick={() => handleDeleteItem(menuItem.id)}
//           >
//             <RiDeleteBin6Line size={26 } />
//           </button>
//         </div>

//         <div
//           onClick={handleOpenModal}
//           className="text-[1rem] z-0 relative space-y-2  text-primary font-light cursor-pointer"
//         >
//           Click to edit
//         </div>
//       </div>
//     </div>

//     <div className="flex justify-center items-center z-50 ">
//       {isModalOpen && (
//       <Suspense fallback={<div>Loading...</div>}>
//         <EditMenuModal

//           menuItem={menuItem}
//           handleCloseModal={handleCloseModal}
//           onUpdateItem={handleUpdateItem}
//         />
//       </Suspense>
//     )}
//     </div>
    
//   </div>
//   );
// }


import { useState, Suspense, lazy } from "react";
import Image from "next/image";
import CurrencyFormatter from "../../utils/formatCurrency";
import { useDispatch } from "react-redux";
import { deleteMenu, editMenu } from "@/redux/features/addMenu/addMenuSlice";
import { RiDeleteBin6Line } from "react-icons/ri";

const EditMenuModal = lazy(() => import("./EditMenuModal"));

export default function MenuCard({ menuItem }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleUpdateItem = (editedValues) => {
    dispatch(editMenu(editedValues));
  };

  const handleDeleteItem = (_id) => {
    dispatch(deleteMenu({ _id })); // Use _id instead of id
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Fallback image URL
  const fallbackImage =
    "https://feelgoodfoodie.net/wp-content/uploads/2020/07/Jollof-Rice-4.jpg";

  return (
    <div className="z-0">
      <div className="rounded-2xl -inset-0 border-secondary shadow-lg border z-10">
        <div>
          <Image
            className="object-cover w-[100%] h-[7.8rem] rounded-tl-2xl rounded-tr-2xl border block"
            src={menuItem.selectedPicture || fallbackImage} // Use fallback image if selectedPicture is not available
            alt={menuItem.itemName}
            width={300}
            height={200}
          />
        </div>
        <div className="items-start justify-between p-2 font-bold">
          <div className="flex space-y-2 justify-between">
            <div>
              <p className="text-[1.2rem]">{menuItem.itemName}</p>
              <p className="text-[.9rem]">
                <CurrencyFormatter value={menuItem.price} />
              </p>
            </div>
            <button
              className="cursor-pointer"
              onClick={() => handleDeleteItem(menuItem._id)} // Use menuItem._id
            >
              <RiDeleteBin6Line size={26} />
            </button>
          </div>

          <div
            onClick={handleOpenModal}
            className="text-[1rem] space-y-2 text-primary font-light cursor-pointer relative"
          >
            Click to edit
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center z-50">
        {isModalOpen && (
          <Suspense fallback={<div>Loading...</div>}>
            <EditMenuModal
              menuItem={menuItem}
              handleCloseModal={handleCloseModal}
              onUpdateItem={handleUpdateItem}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
}