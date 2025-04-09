import Link from "next/link";
import React, { useState } from "react";
import { procurementTable } from "../../../utils/procurementTable";
// import { closeModal } from "@/redux/features/modal/modalSlice";
// import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import ProcurementService from "@/services/ProcurementService";
import Spinner from "@/components/indicators/Spinner";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function CreateProcurementOrder({
  handleCloseProcurementModal,
  handleClose,
}) {
  const router = useRouter();
  // const dispatch = useDispatch();
  const [showContentA, setShowContentA] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formB, setFormB] = useState({
    itemName: "",
    brand: "",
    quantityNumber: "",
    quantityUnit: "",
  });
  const [currentContent, setCurrentContent] = useState("A");
  const [recipientEmail, setRecipientEmail] = useState("");
  // const [loading, setLoading] = useState(false);
  const [formType, setFormType] = useState("");
  const [errorMessage, setErrorMessage] = useState(
    JSON.stringify({
      error: false,
      message: "",
    })
  );

  // const handleClose = () => {
  //   dispatch(closeModal());
  //   handleCloseProcurementModal();
  // };

  const toggleContentA = () => {
    setCurrentContent("A");
    setShowContentA(true);
    setFormType("Exist");
  };

  const toggleContentB = () => {
    setCurrentContent("B");
    setShowContentA(false);
    setFormType("New");
  };

  const handleProceed = () => {
    setCurrentContent("C");
  };

  // Helper function to handle form input changes in "content b"
  const handleFormBChange = (e) => {
    const { name, value } = e.target;

    // // Ensure that the value is not negative
    // const newValue = Math.max(0, parseInt(value) || 0);
    const newValue =
      name === "quantity" ? Math.max(0, parseInt(value) || 0) : value;

    setFormB({
      ...formB,
      [name]: newValue,
    });
  };

  //console.log(formB);
  //console.log(selectedCategory);

  const {
    mutate: newMutate,
    data: newData,
    isPending: newPending,
  } = useMutation({
    mutationKey: "create-new-procurement",
    mutationFn: ProcurementService.createProcurement,
    onSuccess: (data) => {
      //console.log(data);
      toast.success("Procurement created successfully");
      router.push("/kitchen/procurement/procurement_view_inventory");
      handleClose();
    },
    onError: (error) => {
      toast.error(error.response.data.message);
      //console.log(error.response.data.message);
    },
  });

  const {
    mutate: existMutate,
    data: existData,
    isPending: existPending,
  } = useMutation({
    mutationKey: "create-new-procurement-by-id",
    mutationFn: ProcurementService.createProcurementById,
    onSuccess: (data) => {
      //console.log(data);
      router.push("/kitchen/procurement/procurement_view_inventory");
      toast.success("Procurement created successfully");
      handleClose();
    },
    onError: (error) => {
      toast.error(error.response.data.message);
      //console.log(error.response.data.message);
    },
  });

  const handleSubmit = async (e, type) => {
    e.preventDefault();

    const reqBody = {
      ...formB,
      recipient_email: recipientEmail,
    };
    const reqBody2 = {
      ...formB,
      recipient_email: recipientEmail,
    };

    // //console.log(reqBody);
    if (type == "New") {
      newMutate(reqBody);
    } else {
      existMutate(reqBody);
    }
  };

  return (
    <aside className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
      {existPending || (newPending && <Spinner />)}
      <div className='absolute bg-white p-6 rounded-lg w-[808px] h-[458px] border-secondary'>
        <h1 className='text-[20px] font-medium mb-5'>
          Create Procurement Order
        </h1>
        {currentContent !== "C" && (
          <div className='rounded-full bg-[#ffab0271] w-[441px] h-[57px] flex justify-center'>
            <div className='flex justify-center text-center items-center'>
              <button
                className={`rounded-full p-3 mr-3 text-white w-[239px] font-medium h-[57px] text-[13px] ${
                  showContentA ? " bg-primary" : ""
                } transition-all duration-300 ease-linear`}
                onClick={toggleContentA}
              >
                Select from existing Category
              </button>
              <button
                className={`rounded-full p-3 ml-3 text-white w-[188px] font-medium h-[57px] text-[13px] ${
                  !showContentA ? " bg-primary" : " "
                } transition-all duration-300 ease-linear`}
                onClick={toggleContentB}
              >
                Create new Inventory
              </button>
            </div>
          </div>
        )}
        <div>
          {currentContent === "A" && (
            <div className='flex flex-col mt-5'>
              {/* Content A */}
              <div className='flex items-start'>
                <label className='text-[20px] font-bold w-[150px]'>
                  Inventory:
                </label>
                <select
                  className='border border-secondary w-[300px] h-[43px] ml-5'
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value='category1'>Category 1</option>
                  <option value='category2'>Category 2</option>
                </select>
              </div>

              <div className='flex items-start mt-5'>
                <label className='text-[20px] font-bold w-[150px]'>
                  Enter Quantity:
                </label>
                <input
                  className='border border-secondary w-[300px] h-[43px] ml-5'
                  type='number'
                  value={formB.quantity}
                  onChange={handleFormBChange}
                  name='quantity'
                />
              </div>
            </div>
          )}

          {currentContent === "B" && (
            <div className='flex flex-col mt-5'>
              {/* Content B */}
              <div className='flex items-start'>
                <label className='text-[20px] font-bold w-[200px]'>
                  Enter Name:
                </label>
                <input
                  className='border border-secondary w-[300px] h-[43px] ml-5'
                  type='text'
                  value={formB.itemName}
                  onChange={handleFormBChange}
                  name='itemName'
                />
              </div>

              <div className='flex items-start mt-5'>
                <label className='text-[20px] font-bold w-[200px]'>
                  Enter Brand Name:
                </label>
                <input
                  className='border border-secondary w-[300px] h-[43px] ml-5 '
                  type='text'
                  value={formB.brand}
                  onChange={handleFormBChange}
                  name='brand'
                />
              </div>

              <div className='flex space-x-5 p-2 mt-5'>
                <label className='text-[20px] font-bold w-[200px]'>
                  Enter Quantity:
                </label>
                <input
                  className='border border-secondary w-[300px] h-[43px] ml-5 items-start'
                  type='number'
                  value={formB.quantityNumber}
                  onChange={handleFormBChange}
                  name='quantityNumber'
                />

                <select
                  name='quantityUnit'
                  onChange={handleFormBChange}
                  className='border font-mono w-[10vw] p-2 block'
                  data-dropdown-toggle='dropdown'
                >
                  <option defaultValue='select unit'>select unit</option>
                  <option value='bag'>Bag</option>
                  <option value='litre'>Litres(l)</option>
                  <option value='grams'>Gram(g)</option>
                  <option value='kilo'>Kilograms(kg)</option>
                  <option value='sachet'>Sachets</option>
                  <option value='pound'>Pound(9libs)</option>
                  <option value='tuber'>Tubers</option>
                  <option value='ounz'>Ounze(oz)</option>
                  <option value='tonne'>Tonne</option>
                  <option value='cups'>Cup</option>
                  <option value='basket'>Basket</option>
                </select>
              </div>
            </div>
          )}

          {currentContent === "C" && (
            <div className='mt-5'>
              {JSON.parse(errorMessage).error && (
                <div role='alert' className='alert alert-error mb-2'>
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
                      d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span>Error! {JSON.parse(errorMessage).message}</span>
                </div>
              )}
              {/* <h1>Recipient's email</h1> */}
              <div className='mt-5 flex'>
                <label className='text-[20px] font-bold'>
                  Recipient's email:
                </label>
                <input
                  className='border border-secondary w-[300px] h-[43px] ml-5'
                  type='email'
                  id='recipient-email'
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                />
                {/* <Link href="/kitchen/procurement/procurement_view_inventory"> */}
                <button
                  className='w-[174px] h-[43px] bg-primary border border-primary text-white'
                  onClick={(e) => handleSubmit(e, formType)}
                >
                  send order
                </button>
                {/* </Link> */}
              </div>
              {/* <div className="mt-20 flex justify-center">
                
                  <button className="text-white bg-[#049561] w-[272px] h-[43px]">
                    order sent
                  </button>
                
              </div> */}
            </div>
          )}
        </div>
        {currentContent !== "C" && (
          <div className='flex justify-center mt-10'>
            <button
              className='bg-primary w-[272px] p-[15px] text-white'
              onClick={handleProceed}
            >
              Proceed
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
