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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUFWztwWE3ozs53Gtf7CKLWS2YGk2lN08nTA&s";

  return (
    <div className="z-0">
      <div className="rounded-2xl -inset-0 border-secondary shadow-lg border z-10">
        <div>
          <Image
            className="object-cover w-[100%] h-[7.8rem] rounded-tl-2xl rounded-tr-2xl block"
            src={menuItem.selectedPicture || fallbackImage} // Use fallback image if selectedPicture is not available
            alt={menuItem.itemName}
            width={300}
            height={200}
          />
        </div>
        <div className="items-start justify-between p-2 font-bold">
          <div className="flex justify-between items-center">
            <p className="text-[1.2rem]">{menuItem.itemName}</p>
            <p className="text-[1rem]">
              <CurrencyFormatter value={menuItem.price} />
            </p>
          </div>

          <div className="flex my-1 justify-between items-center">
          <p
            onClick={handleOpenModal}
            className="text-[1rem] space-y-2 text-primary font-light cursor-pointer relative"
            >
            Click to edit
          </p>
          <button
            className="cursor-pointer bottom-2"
            onClick={() => handleDeleteItem(menuItem._id)} // Use menuItem._id
          >
              <RiDeleteBin6Line size={24} />
          </button>
          </div>
        </div>
      </div>

      <div className="flex bg-red-500 justify-center items-center z-50">
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